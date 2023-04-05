const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const { consulta } = require('../helpers/dbConnect')
const bcrypt = require('bcryptjs')
const { generarJwt, generarJwtAdmin } = require('../helpers/jwt')

app.use(cookieParser())

const getIndex = async (req, res) => {
    const { email } = req.cookies
    if (email) {
        res.redirect('/entries')
    } else {
        res.render('index', {
            title: 'TwitZerg',
            msg: 'Haz login para comenzar'
        })
    }

}

const checkLogin = async (req, res) => {
    const { email, password } = req.body

    if (email == '' || password == '') {
        res.render('index', {
            title: 'Error de validación',
            msg: 'Rellena los campos'
        })
    } else {

        try {
            const peticion = await consulta(`aut/?email=${email}`, 'get')
            const peticionJson = await peticion.json()
            console.log(peticionJson.data[0].isadmin, 'admin?')

            if (!peticionJson.ok) {
                res.render('index', {
                    title: 'Login fallido',
                    msg: 'No hemos encontrado el usuario'
                })
            } else {

                if (peticionJson.data[0].isadmin) {
                    const token = await generarJwt(peticionJson.data[0].id_author, peticionJson.data[0].name)
                    const token2 = await generarJwtAdmin(peticionJson.data[0].id_author, peticionJson.data[0].name)
                    res.cookie('xtoken', token)
                    res.cookie('ztoken', token2)
                    res.cookie('email', `${email}`)
                    res.redirect('/admin/')
                } else {



                    const token = await generarJwt(peticionJson.data[0].id_author, peticionJson.data[0].name)
                    res.cookie('xtoken', token)
                    res.cookie('email', `${email}`)
                    res.redirect('/entries')
                }

            }
        } catch (error) {
            res.render('error', {
                title: 'error de conexión',
                msg: 'Contacta con el administrador'
            })
        }
    }


}

const logOut = (req, res) => {
    res.clearCookie('xtoken')
    res.clearCookie('ztoken')
    res.clearCookie('email');
    res.render('index', {
        title: 'Sesión cerrada',
        msg: 'Sesión cerrada con éxito, haz login para comenzar'
    })
}

const signup = async (req, res) => {
    res.render('signup', {
        title: 'Regístrate',
        msg: 'Regístrate en nuestra base de datos'
    })
}

const uploadSignup = async (req, res) => {
    const { name, surname, email, password, image } = req.body
    let peticionUser1,peticionUserJson1
    if (!name || !surname || !email || !password || !image ) {
        res.render('error', {
            title: 'error de validación',
            msg: 'Rellena bien todos los campos'
        })
    } else if(password.length < 4) {
        res.render('error', {
            title: 'error de validación',
            msg: 'La contraseña debe tener 4 o más caracteres'
        })
    } else {


        const body = {
            ...req.body
        }

        try {

            peticionUser1 = await consulta(`aut/?email=${email}`, 'get')
            peticionUserJson1 = await peticionUser1.json()
            if (peticionUserJson1.ok) {
                res.render('error', {
                    title: 'error de validación',
                    msg: 'Ya hay un usuario con ese email'
                })
            }

            const peticion = await consulta(`aut/`, 'post', body)
            const peticionJson = await peticion.json()

            if (peticionJson.ok) {
                const peticionUser = await consulta(`aut/?email=${email}`, 'get')
                const peticionUserJson = await peticionUser.json()
                const token = await generarJwt(peticionUserJson.data[0].id_author, peticionUserJson.data[0].name)
                res.cookie('xtoken', token)
                res.cookie('email', `${email}`)
                res.redirect('/entries')

            } else {
                res.render('error', {
                    title: 'error de registro',
                    msg: error
                })
            }


        } catch (error) {
            res.render('error', {
                title: 'error de registro',
                msg: 'El email no es válido'
            })
        }
    }

}

module.exports = {
    getIndex,
    checkLogin,
    logOut,
    signup,
    uploadSignup
}