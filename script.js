

let music = new Audio("background.mp3")
let audioturn = new Audio("stop.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "x"
let isgameover = false;


// to  change turn 
const changeTurn = () => {
    return turn === "x" ? "0" : "x"
}

// to cheak for win
const cheakwin = () => {
let boxtext = document.getElementsByClassName('boxtext');
let wins = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
]
wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
    isgameover = true
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
    }
 
})
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

            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText ="turn for " + turn;

            }
            
            
        }

    })

})
