const express = require('express');
const router = express.Router();
const { insertSociety, getSociety } = require('../controllers/societyController');
router.post('/insertSociety', insertSociety);
router.get('/getSociety/:id', getSociety);
module.exports = router;