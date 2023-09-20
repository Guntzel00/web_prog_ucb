const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function obterCincoNumeros(entradas = [], tentativa = 1) {
  rl.question(`Digite o ${tentativa}º número: `, (entrada) => {
    const numero = parseFloat(entrada);

    if (!isNaN(numero)) {
      entradas.push(numero);
    } else {
      console.log(`Entrada inválida: "${entrada}" não é um número válido.`);
    }

    if (entradas.length === 5) {
      console.log('Números válidos inseridos:');
      console.log(entradas);
      rl.close();
    } else {
      obterCincoNumeros(entradas, tentativa + 1);
    }
  });
}

obterCincoNumeros();
