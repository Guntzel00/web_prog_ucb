function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
}

function calcularTransposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;

    const transposta = [];
    for (let i = 0; i < colunas; i++) {
        transposta[i] = [];
        for (let j = 0; j < linhas; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }

    return transposta;
}

const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matriz A:");
imprimirMatriz(matrizA);

const transpostaA = calcularTransposta(matrizA);

console.log("\nTransposta de Matriz A:");
imprimirMatriz(transpostaA);