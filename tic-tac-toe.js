document.addEventListener("DOMContentLoaded" , function(){
    let boardSquares = document.querySelectorAll('#board div');
    for(let box = 0; box < boardSquares.length; box++){
        boardSquares[box].setAttribute('class', 'square');  
}

gameStatus = new Array(0);
const X_TEXT = "X";
const O_TEXT = "O";
let playerTurn;

for(var s = 0; s < boardSquares.length; s++){
    boardSquares[s].addEventListener("mouseover", function (){
        this.classList.add("hover");
    });
    boardSquares[s].addEventListener("mouseout", function (){
        this.classList.remove("hover");
    });
    boardSquares[s].addEventListener('click', function(){
        if(this.innerHTML !== "X" && this.innerHTML !== "O"){
            let currentPlayer = playerTurn ? X_TEXT : O_TEXT;
            this.innerHTML = currentPlayer;
            playerTurn = !playerTurn;
            this.classList.add("square", "O");
            gameStatus.push(currentPlayer);
            winner();


            console.log(gameStatus);
        }
    
        })
    }
    function winner(){
        if(boardSquares[0].innerHTML === "X" && boardSquares[0].innerHTML === boardSquares[1].innerHTML && boardSquares[0].innerHTML === boardSquares[2].innerHTML ||
        boardSquares[0].innerHTML === "O" && boardSquares[0].innerHTML === boardSquares[1].innerHTML && boardSquares[0].innerHTML === boardSquares[2].innerHTML ){
            var jackpot = boardSquares[0].innerHTML;
            document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
            document.getElementById("status").className=("you-won");
        }else if (boardSquares[0].innerHTML === "X" && boardSquares[0].innerHTML === boardSquares[3].innerHTML && boardSquares[0].innerHTML === boardSquares[6].innerHTML ||
        boardSquares[0].innerHTML === "O" && boardSquares[0].innerHTML === boardSquares[3].innerHTML && boardSquares[0].innerHTML === boardSquares[6].innerHTML ){
            var jackpot = boardSquares[0].innerHTML;
            document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
            document.getElementById("status").className=("you-won");
        }else if (boardSquares[0].innerHTML === 'X' && boardSquares[0].innerHTML === boardSquares[4].innerHTML && boardSquares[0].innerHTML === boardSquares[8].innerHTML ||
        boardSquares[0].innerHTML !== "O" && boardSquares[0].innerHTML === boardSquares[4].innerHTML && boardSquares[0].innerHTML === boardSquares[8].innerHTML){
            var jackpot = boardSquares[0].innerHTML;
            document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
            document.getElementById("status").className=("you-won");
        }else if (boardSquares[3].innerHTML === "X" && boardSquares[3].innerHTML === boardSquares[4].innerHTML && boardSquares[3].innerHTML === boardSquares[5].innerHTML ||
        boardSquares[3].innerHTML === "O" && boardSquares[3].innerHTML === boardSquares[4].innerHTML && boardSquares[3].innerHTML === boardSquares[5].innerHTML ){
            var jackpot = boardSquares[3].innerHTML;
            document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
            document.getElementById("status").className=("you-won");
        }else if (boardSquares[6].innerHTML === "X" && boardSquares[6].innerHTML === boardSquares[7].innerHTML && boardSquares[6].innerHTML === boardSquares[8].innerHTML ||
        boardSquares[6].innerHTML === "O" && boardSquares[6].innerHTML === boardSquares[7].innerHTML && boardSquares[6].innerHTML === boardSquares[8].innerHTML ){
            var jackpot = boardSquares[6].innerHTML;
            document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
            document.getElementById("status").className=("you-won");
        }else if (boardSquares[1].innerHTML === "X" && boardSquares[1].innerHTML === boardSquares[4].innerHTML && boardSquares[1].innerHTML === boardSquares[7].innerHTML ||
        boardSquares[1].innerHTML === "O" && boardSquares[1].innerHTML === boardSquares[4].innerHTML && boardSquares[1].innerHTML === boardSquares[7].innerHTML){
            var jackpot = boardSquares[1].innerHTML;
            document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
            document.getElementById("status").className=("you-won");
        }else if (boardSquares[2].innerHTML === "X" && boardSquares[2].innerHTML === boardSquares[5].innerHTML && boardSquares[2].innerHTML === boardSquares[8].innerHTML ||
        boardSquares[2].innerHTML === "O" && boardSquares[2].innerHTML === boardSquares[5].innerHTML && boardSquares[2].innerHTML === boardSquares[8].innerHTML ){
            var jackpot = boardSquares[2].innerHTML;
            document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
            document.getElementById("status").className=("you-won");
        }else if (boardSquares[2].innerHTML === "X" && boardSquares[4].innerHTML === 'X' && boardSquares[6].innerHTML === 'X'  ||
        boardSquares[2].innerHTML === "O" && boardSquares[4].innerHTML === 'O' && boardSquares[6].innerHTML === "O"  ){
            var jackpot = boardSquares[2].innerHTML;
            document.getElementById("status").innerHTML = "Congratulations! " + jackpot + " is the Winner!";
            document.getElementById("status").className=("you-won");
        }
    }
    var restartbtn = document.querySelector("button");
    restartbtn.addEventListener("click",function(){
    window.location.reload();		
})
})