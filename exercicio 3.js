/**
 Inicio
    receber um numero
        se numero > 5 
             "numero é maior que 5"

    se nao
        "numero não é maior que 5"

        receber um numero
    se numero < 8
        "numero é menor que 8"
    se não
        "numero não é menor que 8"


 Fim
 */

const numero1 = parseInt(prompt('Digite um numero'))
const numero2 = parseInt(prompt('Digite um numero'))

if (numero1 > numero2) {
    alert(`${numero1} é maior`)    
} else if(numero2 > numero1) {
        alert(`${numero2} é maior`)
    } else {
        alert(`${numero2} e ${numero1} sao iguais`)
 }