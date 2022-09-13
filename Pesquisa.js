let array = [4,3,5,8,1,6,9]

// .indexOf serve para indicar qual posição você quer achar. Ex: coloquei para achar o numero 5 
// e o comando me mostrou que está na posição 2.

console.log(array.indexOf(5))

// .includes serve para sabermos se existe o item que colocamos como "parametro" e ira retornar
// um valor booleano. Ex: queria saber se tinha o numero 6 no meu array, e ele me retornou "true".
// pois no meu array tinha o numero 6.
console.log(array.includes(6))

// .pop serve para excluir o ultimo item do array,passando para uma variavel que criei como no Ex abaixo.
let excluirUltimoItem = array.pop()
console.log(excluirUltimoItem) // excluiu o numero 9

// .splice - primeiro criamos uma variavel que ira servir para demonstrar quantos itens queremos tirar do array.
// porem ele irá tirar apenas os ultimos, ou seja no Ex abaixo eu coloquei pra tirar os 5 ultimos numeros
// e ficou apenas o numero 4. pois o 9 eu ja tinha excluido no exemplo acima. 
let excluirVarios = -5
let excluirItem = array.splice(excluirVarios)
console.log(excluirItem)
console.log(array) 

// .shift serve para excluir o primeiro item do array, passando para uma variavel que criei como no Ex abaixo.
let excluirPrimeiroItem = array.shift()
console.log(excluirPrimeiroItem)
console.log(array)
