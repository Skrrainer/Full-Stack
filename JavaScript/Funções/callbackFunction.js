//Callback Function - Função que recebe outra função como parâmetro

// Função "execute" recebe dois parâmetros:
// - taskName: nome da tarefa (string)
// - callback: função que será executada depois
function execute(taskName, callback){
    // Exibe a mensagem com o nome da tarefa
    console.log("Executando a tarefa: ", taskName)

    // Aqui chamamos a função recebida no parâmetro "callback"
    // Repare que aqui sim usamos os parênteses () para executar
    callback()
}

// Função "callback" que será passada como parâmetro
// Ela apenas mostra que a tarefa terminou
function callback(){
    console.log("Tarefa Finalizada.")
}

// Chamando a função "execute"
// Passamos o nome da tarefa (string) e a função "callback"
// Aqui NÃO usamos () porque queremos apenas passar a função como valor
// Quem vai chamar "callback()" é a função "execute"
execute("Download do arquivo...", callback)

//Função anônima usada como callback
execute("Upload do arquivo...", function () {
    console.log("Upload Finalizada.")
})

//Arrow function usada como callback
execute("Semeação do arquivo...", () => {
    console.log("semeação Finalizada.")
})
//Arrow function de uma linha. (Menor sintaxe)
execute("Excluindo arquivo...", () => console.log("Arquivo excluido."))