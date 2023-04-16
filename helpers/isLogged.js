const express = require('express')
const cookieParser = require('cookie-parser')


/**
 * Función para verificar si el usuario está autenticado basado en la existencia de una cookie de sesión.
 *
 * @function
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 * @returns {boolean} - Devuelve 'true' si el usuario está autenticado (tiene una cookie de sesión), 'false' en caso contrario.
 */
const ifLogged = (req, res) => {
    const xToken = req.cookies['xtoken'];

    if (xToken) {
        return true
    } else {
        return false
    }
}

module.exports = {
    ifLogged
}