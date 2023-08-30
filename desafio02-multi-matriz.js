function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

function multiplicaMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const linhasB = matrizB.length;

    const colunasA = matrizA[0].length;
    const colunasB = matrizB[0].length;

    if(linhasA !== colunasB) {
      console.log("Não é possível calcular");
      return;
    }

    const resultado = [
   
    ];

    for (let i = 0; i < linhasA; i++) {
        resultado[i] = [];
        for (let j = 0; j < colunasB; j++) {
            let soma = 0;
            for (let k = 0; k < colunasA; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = soma;
        }
    }

    return resultado;
}


const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrizB = [
    [7, 8, 9],
    [1, 2, 3],
    [4, 5, 6],
];

console.log("Matriz A:");
imprimirMatriz(matrizA);

console.log("\nMatriz B:");
imprimirMatriz(matrizB);

const novaMatriz = multiplicaMatrizes(matrizA, matrizB);

console.log("\nO resultado da multiplicação da Matriz A pela Matriz B é:");
imprimirMatriz(novaMatriz);