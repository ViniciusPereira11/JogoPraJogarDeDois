var nome1  ='';
var nome2  = '';
function add(){
    nome1 = document.getElementById("inputNome1").value;
    nome2 = document.getElementById("inputNome2").value;
    localStorage.setItem("player1", nome1);
    localStorage.setItem("player2", nome2);
    window.location="game.html";
}

function carregar(){
    var nome1 = localStorage.getItem("player1");
    var nome2 = localStorage.getItem("player2");
    document.getElementById("legendaNome1").innerHTML = nome1;
    document.getElementById("legendaNome2").innerHTML = nome2;
    
    document.getElementById("playerPergunta").innerHTML = nome1;
    document.getElementById("playerResposta").innerHTML = nome2;
}
var palavra ='';
function enviarPalavra(){
    palavra = document.getElementById("palavra").value;
    palavra = palavra.toLowerCase();
    
    letra1 = palavra.charAt(1);

    metade = Math.floor(palavra.length/2);
    letra2 = palavra.charAt(metade);

    ultima = palavra.length - 1;
    letra3 = palavra.charAt(ultima);

    p1 = palavra.replace(letra1, "_");
    
    p2 = p1.replace(letra2, "_");
    palavraNova = p2.replace(letra3, "_");

    questao = "<h4 id='exibirPalavra' > P." + palavraNova +"</h4>";
    caixaResposta = "<br> Resposta: <input   id=resposta>";
    botao = "<br> <br> <button class='btn btn-info' onclick='checar()'>Checar</button>";
    linha = questao + caixaResposta + botao;
    document.getElementById("output").innerHTML = linha;

}
//é aqui que declara as variáveis
var pontos1 = 0;
var pontos2 = 0;
var turnoPergunta = 'player1';
var turnoResposta = 'player2';

//é aqui que cria a function
function  checar(){
    var resposta = document.getElementById("resposta").value;
    resposta = resposta.toLowerCase();

    if(resposta == palavra){
        if(turnoResposta === 'player1'){
            pontos1 +=1;
            document.getElementById("pontos1").innerHTML = pontos1;
        }else{
         pontos2 += 1;
         document.getElementById("pontos2").innerHTML = pontos2;   
        }
    }
    if(turnoPergunta =='player1'){
        turnoPergunta = 'player2';
    }else{
        turnoPergunta = 'player1';
    }
    if(turnoResposta =='player1'){
        turnoResposta = 'player2';
    }else{
        turnoResposta = 'player1';
    }

    document.getElementById("playerPergunta").innerHTML = localStorage.getItem(turnoPergunta);
    document.getElementById("playerResposta").innerHTML = localStorage.getItem(turnoResposta);

    var label = '<label>Envie sua Palavra: <b style="color: red">Utilize uma palavra com 5 ou mais letras</b></label>';
    var input = ' <input id="palavra" class="form-control"  placeholder="palavra">';
    var botao = ' <button onclick="enviarPalavra()" class="btn btn-success">Enviar</button>';
    var campoPergunta = label + input + botao;
    document.getElementById("output").innerHTML = campoPergunta;
}