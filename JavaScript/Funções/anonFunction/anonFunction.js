// Função anônima (função que não possui nome)
const showMessageAnon1 = function () {
    return ("Oi de uma função anônima")
}
console.log(showMessageAnon1())

// Função anônima com parâmetro
const showMessageAnon2 = function (name) {
    // name: string com o nome a ser exibido
    return "Olá, " + name
}
console.log(showMessageAnon2("Felipe"))