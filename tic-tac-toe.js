window.addEventListener('DOMContentLoaded' , () => {
    var children= document.getElementById('board').children;
    for(let child=0; child < children.length; child++){
        children[child].setAttribute('class', 'square');
        children[child].addEventListener('click', (o) => {
            children[child].textContent = 'o'
            
        });
        children[child].addEventListener('click', (x) => {
            children[child].textContent = 'x'
            
            
        });
        
         

       
        };
        
        
        
       
            
    
        btnButton.addEventlistener('click', resetboard);
});