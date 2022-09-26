function verificaSeOChutePossuiUmValorValido() {
  // Só de somar ele já tenta converter para um número inteiro
  const numero = +chute

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>'
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
     <h2>Você acertou!</h2>
     <h3>O número secreto era ${numeroSecreto}</h3>
    `
  }

  function numeroForMaiorOuMenorQueOValorPermitido() {
    return numero > maiorValor || numero < menorValor
  }
}
function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}
