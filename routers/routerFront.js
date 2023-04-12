const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const {getIndex, checkLogin, logOut, signup, uploadSignup} = require('../controllers/loginControllers')
const {showEntries, postEntry, uploadEntry, myEntries, getSearch,editEntry,updateEntry, viewOne} = require('../controllers/frontControllers')
const {validarJwt,validarJwtAdmin} = require('../middleware/validarJwt')



router.get('/', getIndex)
router.get('/signup', signup)
router.post('/signup', uploadSignup)
router.post('/log', checkLogin)
router.get('/search', getSearch)
router.post('/search', getSearch)
router.get('/entries', showEntries)
router.get('/viewOne/:id', viewOne)

//rutas protegidas
router.get('/myEntries/',validarJwt, myEntries)
router.get('/post',validarJwt, postEntry)
router.post('/post',validarJwt, uploadEntry)
router.get('/edit/:indexEntry',validarJwt, editEntry)
router.post('/edit/',validarJwt, updateEntry)
router.get('/logout',validarJwt, logOut)



module.exports = router