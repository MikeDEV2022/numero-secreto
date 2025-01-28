let limite = 10
let guardaNumero = [];
let numeroSecreto = gerarAleatorio()
let tentativas = 1

function textoNaTela(tag,texto){
    tag = document.querySelector(tag);
    tag.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function textoInicial(){
    textoNaTela("h1", "Jogo do número secreto");
    textoNaTela("p", "Escolha um número entre 1 e 10");
}

function limparTexto(){
    document.getElementById("n1").value = "";
}

function verificarChute(){
    let meuInput = document.getElementById("n1").value;
    if (numeroSecreto == meuInput){
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        textoNaTela("h1", "Acertou");
        textoNaTela("p", `Parabens você acertou o número secreto em ${tentativas} ${palavraTentativas}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroSecreto > meuInput){
            textoNaTela("p", `O número secreto é maior que ${meuInput}`);
        }else{
            textoNaTela("p", `O número secreto é menor que ${meuInput}`);
        }
    }
    tentativas++
    limparTexto();

}

function novoJogo(){
    textoInicial();
    tentativas = 1;
    gerarAleatorio();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function gerarAleatorio(){
    let numeroSorteador = parseInt(Math.random() * limite + 1);
    if(guardaNumero.length > limite){
        guardaNumero = [];
    }
    if (guardaNumero.includes(numeroSorteador)){
        return gerarAleatorio();
    }else{
        guardaNumero.push(numeroSorteador);
        console.log(guardaNumero)
        return numeroSorteador;
    }
}
textoInicial();