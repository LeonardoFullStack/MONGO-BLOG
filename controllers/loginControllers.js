const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const {consulta} = require('../helpers/dbConnect')
const bcrypt = require('bcryptjs')
const {generarJwt,generarJwtAdmin} = require('../helpers/jwt')

app.use(cookieParser())

const getIndex = async (req,res) => {
    const {email} = req.cookies
    if (email) {
        res.redirect('/entries')
    } else {
        res.render('index', {
            title:'TwitZerg',
            msg:'Haz login para comenzar'
        }) 
    }
    
}

const checkLogin = async (req,res) => {
    const {email, password} = req.body

    if (email == '' || password == '') {
        res.render('index', {
            title:'Error de validación',
            msg:'Rellena los campos'
        })
    } else {

    try {
        const peticion = await consulta(`aut/?email=${email}`, 'get')
        const peticionJson = await peticion.json()
        console.log(peticionJson)
        
        if (!peticionJson.ok) {
            res.render('index', {
                title:'Login fallido',
                msg:'No hemos encontrado el usuario'
            })
        }  else {

            const token = await generarJwt(peticionJson.data[0].id_author, peticionJson.data[0].name)
            res.cookie('xtoken', token)
            res.cookie('email', `${email}`)
            res.redirect('/entries')

        }
    } catch (error) {
        res.render('error', {
            title:'error de conexión',
            msg:'Contacta con el administrador'
        })
    }
}
    
    
}

const logOut = (req,res) => {
    res.clearCookie('xtoken')
    res.clearCookie('email');
    res.render('index', {
        title:'Sesión cerrada',
        msg:'Sesión cerrada con éxito, haz login para comenzar'
    })
}

module.exports = {
    getIndex,
    checkLogin,
    logOut
}