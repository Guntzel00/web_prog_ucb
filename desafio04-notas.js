// Função construtora para criar objetos Aluno
function Aluno(nome) {
    this.nome = nome;
    this.notas = [];
  }
  
  // Método para incluir notas de um aluno
  Aluno.prototype.incluirNota = function (nota) {
    this.notas.push(nota);
  };
  
  // Método para calcular a média das notas de um aluno
  Aluno.prototype.calcularMedia = function () {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  };
  
  // Função para determinar se um aluno foi aprovado ou reprovado
  function verificarAprovacao(aluno, callback) {
    const media = aluno.calcularMedia();
    if (media >= 7) {
      callback(`${aluno.nome} foi APROVADO com média ${media.toFixed(2)}`);
    } else {
      callback(`${aluno.nome} foi REPROVADO com média ${media.toFixed(2)}`);
    }
  }
  
  const aluno1 = new Aluno('João');
  aluno1.incluirNota(8);
  aluno1.incluirNota(7);
  
  verificarAprovacao(aluno1, (resultado) => {
    console.log(resultado);
  });
  
  const aluno2 = new Aluno('Maria');
  aluno2.incluirNota(5);
  aluno2.incluirNota(6);
  
  verificarAprovacao(aluno2, (resultado) => {
    console.log(resultado);
  });