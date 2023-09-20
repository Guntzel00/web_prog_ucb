const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFatorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

rl.question('Digite um número para calcular o fatorial: ', (entrada) => {
  const numero = parseInt(entrada);

  if (!isNaN(numero) && numero >= 0) {
    const resultado = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é ${resultado}`);
  } else {
    console.log('Por favor, insira um número válido (inteiro não negativo).');
  }

  rl.close();
});