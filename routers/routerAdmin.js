const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const {adminIndex} = require('../controllers/adminControllers')
const { postEntry, uploadEntry, myEntries, getSearch,editEntry,updateEntry, viewOne} = require('../controllers/adminControllers')
const {validarJwt,validarJwtAdmin} = require('../middleware/validarJwt')
const {logOut} = require('../controllers/loginControllers')

router.get('/', adminIndex)
router.get('/myEntries/',validarJwt, myEntries)
router.get('/search',validarJwt, getSearch)
router.post('/search',validarJwt, getSearch)
router.get('/post',validarJwt, postEntry)
router.post('/post',validarJwt, uploadEntry)
router.get('/edit/:indexEntry',validarJwt, editEntry)
router.post('/edit/',validarJwt, updateEntry)
router.get('/logout',validarJwt, logOut)
router.get('/viewOne/:id',validarJwt, viewOne)



module.exports = router