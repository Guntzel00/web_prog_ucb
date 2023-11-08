// calculatorController.js

const calculatorModel = require('../models/calculatorModel');

const calculatorController = {
	calculate: (req, res) => {
		const { num1, num2, operation } = req.body;

		if (isNaN(num1) || isNaN(num2) || !calculatorModel[operation]) {
			return res.status(400).json({ error: 'Parâmetros inválidos' });
		}

		const result = calculatorModel[operation](num1, num2);
		res.json({ result });
	},
};

module.exports = calculatorController;
