//Operador condicional ternário

let age = 16
console.log(age >= 18 ? "Você pode dirigir" : "Você não pode dirigir.")
//Falsy
console.log("Falsy")
console.log(false ? "VERDADEIRO" : "FALSO")
console.log(0 ? "VERDADEIRO" : "FALSO")
console.log(-0 ? "VERDADEIRO" : "FALSO")
console.log("" ? "VERDADEIRO" : "FALSO")
console.log(null ? "VERDADEIRO" : "FALSO")
console.log(undefined ? "VERDADEIRO" : "FALSO")
console.log(NaN ? "VERDADEIRO" : "FALSO")

console.log("Truthy")
console.log(true ? "VERDADEIRO" : "FALSO")
console.log({} ? "VERDADEIRO" : "FALSO")
console.log([] ? "VERDADEIRO" : "FALSO")
console.log(1 ? "VERDADEIRO" : "FALSO")
console.log(3.23 ? "VERDADEIRO" : "FALSO")
console.log("Felipe" ? "VERDADEIRO" : "FALSO")
console.log(" " ? "VERDADEIRO" : "FALSO")