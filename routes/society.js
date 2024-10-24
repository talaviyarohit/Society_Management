const express = require('express');
const router = express.Router();
const { insertSociety, getSociety } = require('../controllers/societyController');
router.post('/insertSociety', insertSociety);
router.get('/getSociety', getSociety);
module.exports = router;