let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer

//Contador de jogadas

let player1 = 0
let player2 = 0

// adicionando evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
    //Quando alguém clica na caixa vai acontecer algo
    boxes[i].addEventListener("click", function () {
        let el = checkEl(player1, player2)
        //Verifica se ja tem "x" ou "o"
        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true)
            // A partir daí ja aparece o X quando houver o click, porém não muda para "O" e ele aceita infinitos "X"
            this.appendChild(cloneEl)
            //Computar jogadas// A partir dessa logica o "O" já é adicionado, porém ainda não está o "o" pode ser adicionado infinitas vezes
            if (player1 == player2) {
                player1++;

                if(secondPlayer == "ai-players"){
                    computerPlay()
                    player2++
                }
            } else {
                player2++
            }

            // Checar quem venceu

            checkWinCondition()
        }
    })
}
// evento para saber se é multyplayer ou IA

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        secondPlayer = this.getAttribute("id")

        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none"
        }

        setTimeout(() => {
            let container = document.querySelector('#container-main')
            container.classList.remove("hide")
        }, 500);
    })
}

//Ver que vai jogar
function checkEl(player1, player2){
    if (player1 == player2) {
        // x
        el = x
    } else {
        //o
        el = o
    }
    return el
}

// ver quem ganhou

function checkWinCondition(){
    let block1 = document.querySelector("#block-1")
    let block2 = document.querySelector("#block-2")
    let block3 = document.querySelector("#block-3")
    let block4 = document.querySelector("#block-4")
    let block5 = document.querySelector("#block-5")
    let block6 = document.querySelector("#block-6")
    let block7 = document.querySelector("#block-7")
    let block8 = document.querySelector("#block-8")
    let block9 = document.querySelector("#block-9")

    //horizontal
    if(block1.childNodes.length > 0 && block2.childNodes.length > 0 && block3.childNodes.length > 0){
        let block1Child = block1.childNodes[0].className
        let block2Child = block2.childNodes[0].className
        let block3Child = block3.childNodes[0].className

        if (block1Child == 'x' && block2Child =='x' && block3Child == 'x'){
            declareWinner('x')
        } else if(block1Child == 'o' && block2Child =='o' && block3Child == 'o'){
            declareWinner('o')
        }
    }

    if(block4.childNodes.length > 0 && block5.childNodes.length > 0 && block6.childNodes.length > 0){
        let block4Child = block4.childNodes[0].className
        let block5Child = block5.childNodes[0].className
        let block6Child = block6.childNodes[0].className

        if (block4Child == 'x' && block5Child =='x' && block6Child == 'x'){
            declareWinner('x')
        } else if(block4Child == 'o' && block5Child =='o' && block6Child == 'o'){
            declareWinner('o')
        }
    }

    if(block7.childNodes.length > 0 && block8.childNodes.length > 0 && block9.childNodes.length > 0){
        let block7Child = block7.childNodes[0].className
        let block8Child = block8.childNodes[0].className
        let block9Child = block9.childNodes[0].className

        if (block7Child == 'x' && block8Child =='x' && block9Child == 'x'){
            declareWinner('x')
        } else if(block7Child == 'o' && block8Child =='o' && block9Child == 'o'){
            declareWinner('o')
        }
    }

    //vertical
    if(block1.childNodes.length > 0 && block4.childNodes.length > 0 && block7.childNodes.length > 0){
        let block1Child = block1.childNodes[0].className
        let block4Child = block4.childNodes[0].className
        let block7Child = block7.childNodes[0].className

        if (block1Child == 'x' && block4Child =='x' && block7Child == 'x'){
            declareWinner('x')
        } else if(block1Child == 'o' && block4Child =='o' && block7Child == 'o'){
            declareWinner('o')
        }
    }

    if(block2.childNodes.length > 0 && block5.childNodes.length > 0 && block8.childNodes.length > 0){
        let block2Child = block2.childNodes[0].className
        let block5Child = block5.childNodes[0].className
        let block8Child = block8.childNodes[0].className

        if (block2Child == 'x' && block5Child =='x' && block8Child == 'x'){
            declareWinner('x')
        } else if(block2Child == 'o' && block5Child =='o' && block8Child == 'o'){
            declareWinner('o')
        }
    }

    if(block3.childNodes.length > 0 && block6.childNodes.length > 0 && block9.childNodes.length > 0){
        let block3Child = block3.childNodes[0].className
        let block6Child = block6.childNodes[0].className
        let block9Child = block9.childNodes[0].className

        if (block3Child == 'x' && block6Child =='x' && block9Child == 'x'){
            declareWinner('x')
        } else if(block3Child == 'o' && block6Child =='o' && block9Child == 'o'){
            declareWinner('o')
        }
    }

    //Diagonal

    if(block1.childNodes.length > 0 && block5.childNodes.length > 0 && block9.childNodes.length > 0){
        let block1Child = block1.childNodes[0].className
        let block5Child = block5.childNodes[0].className
        let block9Child = block9.childNodes[0].className

        if (block1Child == 'x' && block5Child =='x' && block9Child == 'x'){
            declareWinner('x')
        } else if(block1Child == 'o' && block5Child =='o' && block9Child == 'o'){
            declareWinner('o')
        }
    }

    if(block3.childNodes.length > 0 && block5.childNodes.length > 0 && block7.childNodes.length > 0){
        let block3Child = block3.childNodes[0].className
        let block5Child = block5.childNodes[0].className
        let block7Child = block7.childNodes[0].className

        if (block3Child == 'x' && block5Child =='x' && block7Child == 'x'){
            declareWinner('x')
        } else if(block3Child == 'o' && block5Child =='o' && block7Child == 'o'){
            declareWinner('o')
        }
    }

    //# Quando o jogo da velha

    let counter = 0

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
    }

    if(counter == 9){
        declareWinner("Deu velha")
    }

}

//Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = ""

    if(winner == "x"){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) +1;
        msg = 'Jogador 1 venceu!'
    } else if(winner == "o"){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) +1
        msg = 'Jogador 2 venceu!'
    } else{
        msg = "Deu Velha"
    }

    // Exibir mensagem na tela

    messageText.innerHTML = msg
    messageContainer.classList.remove("hide")

    //esconde mensagem

    setTimeout(function(){
        messageContainer.classList.add('hide')
    },3000)

    //zerar as jogadas

    player1 = 0
    player2 = 0

    //remove x e o

    let boxesToRemove = document.querySelectorAll('.box div')
    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }

}

function computerPlay(){
    let cloneO = o.cloneNode(true)
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5 )

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1 ) {
                boxes[i].appendChild(cloneO)
                counter++;
                break
            }
        } else{
            filled++;
        }
    }

}

if(counter == 0 && filled < 9){
    computerPlay()
}

