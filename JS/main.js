//var  declaration
const   userScore = 0;
const   compScore = 0;

const    userScore_span = document.getElementById("user-score");
const    compScore_span = document.getElementById("comp-score");
const   scoreBoard_div = document.querySelector(".score-board");

const   result_div = document.querySelector(".result");
const   rock_div = document.getElementById("r");
const   paper_div = document.getElementById("p");
const   scissors_div = document.getElementById("s");


//Computer random choice
function  getCompChoice(){
    const  choices   = ['r', 'p', 's'];
     const  rendomNumber =  Math.floor(Math.random()*3);
     return  choices[rendomNumber];
}


//function for   win
function  win(){
console.log("WIN");

}
//function for   lose

 
function  lose(){
    console.log("LOSE");

}
 
//function for   draw

function  draw(){
    console.log("DRAW");

}
 
//game  condition
function  game(userChoice){

    const  compChoice = getCompChoice();
     switch(userChoice+compChoice){
         case "rs":
         case "pr":
         case "sp":
             win();
             break;
         case "rp":
         case "ps":
         case "sr":
             lose();
              break;
        case "rr":
        case "pp":
        case "ss":
            draw();
             break;
         
     }



     
}
 
//main  function or   click  event  function
function  main(){
    rock_div.addEventListener('click',  function(){
        game("r") ;
        })
        
        paper_div.addEventListener('click',  function(){
            game("p") ;
        
        })
        scissors_div.addEventListener('click',  function(){
            game("s") ;
        
        })
        
}
main();


























