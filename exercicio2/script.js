const idade = 121
const terminouEnsinoMedio = false
const estaCursandoFacul = true


function verificarCandidato() {
    if (idade >= 18) {
      console.log("O candidato é maior de 18 anos");
    } else if (terminouEnsinoMedio) {
      console.log("O candidato  terminou o ensino médio");
    } else if (!estaCursandoFacul) {
      console.log("O candidato está cursando faculdade");
    } else {
      console.log("dado inválido");
    }
  }
  verificarCandidato()