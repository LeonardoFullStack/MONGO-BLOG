const express = require('express')
const cookieParser = require('cookie-parser')

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