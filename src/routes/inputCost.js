const express = require('express')
const inputCost = require('../controllers/inputCost')
const totalCost = require('../controllers/totalCost')
const del = require('../controllers/delete')
const displayALL = require('../controllers/displayAll')
const router = express.Router()


router.post('/',inputCost) // input        
router.get('/display',displayALL) 
router.get('/total',totalCost) // total sum 
router.delete('/del',del) // delete


module.exports = router