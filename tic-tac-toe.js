window.addEventListener('DOMContentLoaded' , () => {
    var board = document.getElementById("board");
    var boardSquares = board.querySelectorAll("div");
    boardSquares.forEach(boardSquares =>{
        boardSquares.className = 'square';
        boardSquares.addEventListener('click', function(){
            boardSquares.textContent = "O";
            boardSquares.classList.add("O");

        })
    });
       
            
            
        
        
        
        
       
            
    
        btnButton.addEventlistener('click', resetboard);
});