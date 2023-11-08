// calculator.js

document.addEventListener('DOMContentLoaded', function () {
	const num1Input = document.getElementById('num1');
	const operationSelect = document.getElementById('operation');
	const num2Input = document.getElementById('num2');
	const calculateButton = document.getElementById('calculateButton');
	const resultElement = document.getElementById('result');

	calculateButton.addEventListener('click', function () {
		const num1 = parseFloat(num1Input.value);
		const num2 = parseFloat(num2Input.value);
		const operation = operationSelect.value;

		fetch('http://localhost:3000/calculate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ num1, num2, operation }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				resultElement.textContent = `Resultado: ${data.result}`;
			})
			.catch((error) => {
				console.error(error);
				resultElement.textContent = 'Erro ao calcular';
			});
	});
});
