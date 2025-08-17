/*
try {
    //Tenta executar algo.
    console.log(result)
}catch (error) {
    //Captura o erro pra tratar.
    console.log(error)
} finally {
    console.log("Fim")
}*/

let result = 1

try {
    if (result === 0){
        throw new Error ("Nao pode ser zero")
    }
}catch (error){
    console.log(error)
} finally {
    console.log ("Fim")
}