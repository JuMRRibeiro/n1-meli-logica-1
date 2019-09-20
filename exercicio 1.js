/**
 Inicio
    receber um numero
    se numero > 10
        "numero é maior que 10"
    se nao
        "numero não é maior que 10"
 Fim
 */

const numero = parseIntprompt('Digite um numero')

if (numero > 10) {
    alert(`${numero} é maior que 10!`)
} else {
    if (numero == 10) {
        alert(`${numero} é igual a 10`)
    } else {
        alert(`${numero} não é maior que 10 e nem igual a 10`)
    }
}