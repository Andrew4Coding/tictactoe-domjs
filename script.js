const listOfButtonArray = Array.from(document.getElementsByClassName('button-to-click'))
const listOfButton = document.getElementsByClassName('button-to-click')

const listOfRow = document.querySelector('.grid-container')

let isPlayer1 = true
let clickable = true

function restartGame(){
    listOfButtonArray.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor = 'white'})
    isPlayer1 = true
    clickable = true
    document.getElementById('message').innerHTML = 'Its <b id="display-player">Player X</b> Turn'
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function checkWin(){
    for (const condition of winningCombos){
        let [a, b, c] = condition
        if (listOfButton[a].innerText && 
            (listOfButton[a].innerText == listOfButton[b].innerText &&
            listOfButton[a].innerText == listOfButton[c].innerText)){
                const color = isPlayer1 ? "#FF0060" : "#0079FF"
                listOfButton[a].style.backgroundColor = color
                listOfButton[b].style.backgroundColor = color
                listOfButton[c].style.backgroundColor = color

                listOfButton[a].style.color = 'white'
                listOfButton[b].style.color = 'white'
                listOfButton[c].style.color = 'white'
                return true
        }
    }
}

listOfRow.addEventListener
('click', function(e) {
    if (e.target.matches('.button-to-click') && clickable){
        if (e.target.innerText == ""){
            const displayPlayer = document.getElementById('display-player')
            let playerwin;
            if (isPlayer1){
                playerwin = 'X'
                e.target.style.color = '#FF0060'
                displayPlayer.innerText = 'Player O'
            }
            else{
                playerwin = 'O'
                e.target.style.color = '#0079FF'
                displayPlayer.innerText = 'Player X'
            }
            e.target.innerText = playerwin
            if (checkWin()){
                document.getElementById('message').innerHTML = 'Player <b id="display-player">' + playerwin + '</b> Wins!'
                clickable = false
            }
            if (listOfButton[0].innerText != '' &&
            listOfButton[1].innerText != '' &&
            listOfButton[2].innerText != '' &&
            listOfButton[3].innerText != '' &&
            listOfButton[4].innerText != '' &&
            listOfButton[5].innerText != '' &&
            listOfButton[6].innerText != '' &&
            listOfButton[7].innerText != '' &&
            listOfButton[8].innerText != '' &&
            !checkWin()){
                document.getElementById('message').innerHTML = 'TIE'
                clickable = false
                listOfButtonArray.forEach(box => {
                    box.style.backgroundColor = 'white'
                    box.style.color = 'black'})
            }

            isPlayer1 = !isPlayer1
        }
    }
})


