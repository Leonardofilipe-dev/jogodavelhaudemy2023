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
            } else {
                player2++
            }
        }
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