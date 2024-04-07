

let music = new Audio("background.mp3")
let audioturn = new Audio("stop.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "x"

// to  change turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// to cheak for win
const cheakwin = () => {

}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=> {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            cheakwin();
            document.getElementsByClassName("info")[0].innerText ="turn for " + turn;
            
            
        }

    })

})
