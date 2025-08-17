// Função sem parâmetro - apenas imprime uma mensagem fixa no console
function message() {
    console.log("Hello World!")
}

// Função com parâmetro - recebe um nome de usuário e imprime uma mensagem
function userGreeting(username) {
    // username: string com o nome do usuário a ser exibido na mensagem
    console.log(`Hello ${username}`)
}

// Função que recebe dois números e imprime a soma deles
function sum(a, b) {
    // a: primeiro número
    // b: segundo número
    console.log(a + b)
}

// Função que junta até três textos, com valores padrão para o segundo e o terceiro
function joinText(text1, text2 = "", text3 = "") {
    // text1: texto principal (obrigatório)
    // text2: segundo texto (opcional)
    // text3: terceiro texto (opcional)
    console.log(text1, text2, text3)
}

// Função que retorna a soma de dois números
function sum2 (a, b){
    // result: guarda a soma de a + b
    let result = a + b
    return result
}

// response: variável que armazena o retorno da função sum2
let response = sum2(1, 2)
console.log(response)        // Exibe: 3

console.log(sum2(1, 2))      // Também exibe: 3

// Function Hoisting
// É possível chamar a função antes dela ser declarada, 
// pois funções declaradas com "function" são içadas (hoisting).
showMessage("Mensagem")

function showMessage (messageHoisting){
    // messageHoisting: texto a ser exibido no console
    console.log(messageHoisting)
}

// Chamadas das funções (exemplos de uso)
// userGreeting("Felipe")                      // Exibe: Hello Felipe
// message()                                   // Exibe: Hello World!
// sum(1, 2)                                   // Exibe: 3
// joinText("Felipe", "de Toledo", "Krainer")  // Exibe: Felipe de Toledo Krainer
