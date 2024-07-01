//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do numero secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML ="Escolha um numero entre 1 e 10";

//esse são os caminhos para buscar um elemento do Html porém para facilitar na hora
//de chamar a mesma estrutura para diferentes elementos é mais pratico criar uma função.
//exibirTextoNaTela

let numeroSecreto = gerarNurmeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
}
function exebirMensagemInicial() {
    exibirTextoNaTela("h1","Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero entre 1 e 10");
}

exebirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentetiva=tentativas > 1 ?'tentativas':'tentativa';
        let mensagemTentativas =`você descobriu o numero secreto com ${tentativas} ${palavraTentetiva}!`;
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparChute();
        }
}




function gerarNurmeroAleatorio() {
    return parseInt( Math.random()*10+1);
    
}
function limparChute(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo() {
    numeroSecreto = gerarNurmeroAleatorio();
    limparChute();
    tentativas= 1;
    exebirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
    
}