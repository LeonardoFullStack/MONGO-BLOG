const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const { postEntry, uploadEntry, myEntries, getSearch,editEntry,updateEntry, viewOne,deleteEntry,adminIndex} = require('../controllers/adminControllers')
const {validarJwt,validarJwtAdmin} = require('../middleware/validarJwt')
const {logOut} = require('../controllers/loginControllers')

router.get('/',validarJwtAdmin, adminIndex)
router.get('/myEntries/',validarJwtAdmin, myEntries)
router.get('/search',validarJwtAdmin, getSearch)
router.post('/search',validarJwtAdmin, getSearch)
router.get('/post',validarJwtAdmin, postEntry)
router.post('/post',validarJwtAdmin, uploadEntry)
router.get('/edit/:indexEntry',validarJwtAdmin, editEntry)
router.post('/edit/',validarJwtAdmin, updateEntry)
router.get('/delete/:id',validarJwtAdmin,deleteEntry)
router.get('/logout',validarJwtAdmin, logOut)
router.get('/viewOne/:id',validarJwtAdmin, viewOne)



module.exports = router