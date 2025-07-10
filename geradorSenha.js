const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.prompt();



const caracatres = 'AbcdefGHijKLmnOpQRsRtuvWxYz123456789@!#$%ˆ&*'
console.log(caracatres.length)
readline.question("Digite o comprimento da senha: ", resposta =>{
    const tamanho = parseInt(resposta, 10)
    if(tamanho < 0 ){
        console.log("O comprimento da senha deve ser maior que 0")
        return readline.close()
    }

    let senha = ''

    for(let i = 0; i < tamanho; i++){
        const indiceAleatorio = Math.floor(Math.random() * caracatres.length)
        senha += caracatres.charAt(indiceAleatorio)  
    }
    console.log(`senha gerada: ${senha}`)
    
    readline.close()
})

