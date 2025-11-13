let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let back = new Audio("back.mp3");
let audioclick = new Audio("onclick.mp3");
let wiiner = new Audio("wiiner.mp3");
let isover = new Audio("over.wav");
let gameover = false;

let turnO = true; //playerX, playerO

let arr = winPatterns = [
    [0,1,2,],
    [0,3,6,],
    [0,4,8,],
    [1,4,7,],
    [2,5,8,],
    [2,4,6,],
    [3,4,5,],
    [6,7,8,],
];



const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) { // for player O...
            box.innerText = "O";
            turnO = false;
        } else { // for player X..
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;
        audioclick.play();
        checkWinner();
        gameover = true;
        if(!gameover){
        }
    });
});

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
        wiiner.play();

    }
}


const enabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWiner = (winer) => {
    msg.innerText = `Congratulations, Winner is ${winer}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    gameover = true;
};

const checkWinner = () => {
    for( let pattern of winPatterns) {
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWiner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
