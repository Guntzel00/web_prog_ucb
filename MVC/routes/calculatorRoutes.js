// calculatorRoutes.js

const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

// Use a body-parser para analisar dados JSON no corpo da solicitação
router.use(express.json());

router.post('/calculate', calculatorController.calculate);

module.exports = router;
