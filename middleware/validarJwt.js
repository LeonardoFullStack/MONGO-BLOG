const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')



const validarJwt = (req, res, next) => {
    
       
    const xToken = req.cookies['xtoken'];
        

        if (!xToken) {
            return res.render('index', {
                title: 'No has iniciado sesión',
                msg: 'Inicia sesión para continuar'
            })
        }

        try {

            const payload = jwt.verify(xToken, process.env.JWT_SECRET_KEY);
            
            req.header.id = payload.uid
            req.header.name = payload.name
            

        } catch (error) {
            return res.render('error', {
                title: 'No has iniciado sesión',
                msg: 'Inicia sesión para continuar'
            })
        }

        next()


}

const validarJwtAdmin = (req, res, next) => {
    
       
    const zToken = req.cookies['ztoken'];
     
        

        if (!zToken) {
            return res.render('error', {
                title: 'No tienes permisos',
                msg: 'Inicia sesión como administrador para continuar'
            })
        }

        try {

            const payload = jwt.verify(zToken, process.env.JWT_SECRET_KEY2);
            
            req.header.id = payload.uid
            req.header.name = payload.name
            
            

        } catch (error) {
            
            return res.render('error', {
                title: 'No has iniciado sesión',
                msg: 'Inicia sesión para continuar'
            })
        }
        
        next()


}



module.exports = {
    validarJwt,
    validarJwtAdmin
}