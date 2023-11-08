// app.js

const express = require('express');
const app = express();
const calculatorRoutes = require('./routes/calculatorRoutes');
const cors = require('cors');

app.use(cors());

app.use(express.static('public'));
app.use(calculatorRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Servidor rodando na porta http://localhost:${port}`);
});
