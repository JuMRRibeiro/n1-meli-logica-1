const numero1 = parseInt(prompt('Digite um numero'))
const numero2 = parseInt(prompt('Digite um numero'))

if (numero1 > numero2) {
    alert(`${numero1} é maior`)    
} else if(numero2 > numero1) {
        alert(`${numero2} é maior`)
    } else {
        alert(`${numero2} e ${numero1} é maior`)
 }