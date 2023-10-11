const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para exibir o formulário
app.get('/formulario', (req, res) => {
	res.sendFile(__dirname + '/formulario.html');
});

// Rota para processar o envio do formulário
app.post(
	'/formulario',
	[
		// Validação dos campos
		body('nome').notEmpty().withMessage('O campo nome é obrigatório'),
		body('cpf').isLength({ min: 11, max: 11 }).withMessage('CPF inválido'),
		body('data-nascimento').isDate().withMessage('Data de nascimento inválida'),
		body('endereco').notEmpty().withMessage('O campo endereço é obrigatório'),
		body('uf').notEmpty().withMessage('O campo UF é obrigatório'),
		body('cep').isLength({ min: 8, max: 8 }).withMessage('CEP inválido'),
		body('email').isEmail().withMessage('E-mail inválido'),
		body('telefone')
			.isLength({ min: 10, max: 15 })
			.withMessage('Telefone inválido'),
		body('especialidade').notEmpty().withMessage('Selecione uma especialidade'),
		body('data-hora').isISO8601().withMessage('Data e hora inválidas'),
	],
	(req, res) => {
		// Verificar se houve erros de validação
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		// Se não houver erros, os dados do formulário são válidos
		// Aqui você pode salvar os dados em um banco de dados ou realizar outras ações necessárias
		res.send('Formulário enviado com sucesso!');
	}
);

app.listen(3000, () => {
	console.log('Servidor rodando em http://localhost:3000');
});
