function verificaSeOChutePossuiUmValorValido() {
  // Só de somar ele já tenta converter para um número inteiro
  const numero = +chute

  if (chuteForInvalido(numero)) {
    console.log('valor inválido')
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    console.log('valor inválido')
  }

  function numeroForMaiorOuMenorQueOValorPermitido() {
    return numero > maiorValor || numero < menorValor
  }
}
function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}
