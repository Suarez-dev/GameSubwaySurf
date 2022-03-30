
let block = document.getElementById("block");
let game = document.getElementById("game"); 

 
function moveLeft(){

    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -=100;
    if(left > -100){
    character.style.left = left + "px";

    }
}

function moveRight(){
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left +=100;
    if(left<300){
    character.style.left = left + "px";
    }
}


document.addEventListener("keydown", event =>{
    if(event.key==="ArrowLeft"){
        moveLeft();
    }
    if(event.key==="ArrowRight"){
         moveRight();
    }
})

var counter = 0;

block.addEventListener("animationiteration", ()=> {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counter++;
})

setInterval(function(){
    var characterLeft = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop =
    parseInt(window.getComputedStyle(block).getPropertyValue("top"));


    if(characterLeft == blockLeft && 
        blockTop < 500 && 
        blockTop > 300 ){
            block.style.animation = "none";
            alert("game over. Score:"+counter );
            
        } 


}, 1)

/* el game over podria salir un modal mostrando el puntaje y el game over 
-tambien en pantalla un counter que se vaya actualizando en tiempo real*/