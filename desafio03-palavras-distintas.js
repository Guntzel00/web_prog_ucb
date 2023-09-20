function palavrasDistintas(texto) {
    const palavras = texto.split(/\s+/);
  
    const palavrasDistintas = new Set(palavras);
  
    const resultado = Array.from(palavrasDistintas);
  
    return resultado;
  }
  
  const textoExemplo = "Esta é uma string de exemplo com palavras repetidas Esta é uma";
  const palavrasUnicas = palavrasDistintas(textoExemplo);
  
  console.log(palavrasUnicas); 