//var  declaration
let   userScore = 0;
let   compScore = 0;

const    userScore_span = document.getElementById("user-score");
const    compScore_span = document.getElementById("comp-score");
const   scoreBoard_div = document.querySelector(".score-board");

const   result_p = document.querySelector(".result > p");
const   rock_div = document.getElementById("r");
const   paper_div = document.getElementById("p");
const   scissors_div = document.getElementById("s");


//Computer random choice
function  getCompChoice(){
    const  choices   = ['r', 'p', 's'];
     const  rendomNumber =  Math.floor(Math.random()*3);
     return  choices[rendomNumber];
}

function  converToward(letter){
    if(letter ==="r") return "Rock";
    if(letter ==="p") return "Paper";
    return  "Scissor";


}


//function for   win
function  win(user ,  comp ){
 userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  const  smallUserWord = "user".fontsize(3).sup() ;
  const  smallCompWord = "comp".fontsize(3).sup() ;
   result_p.innerHTML = `${converToward(user)}${smallUserWord} beats  ${converToward(comp)}${smallCompWord}. You  win`;

 

}
//function for   lose

 
function  lose(user ,  comp){
     
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
  
    const  smallUserWord = "user".fontsize(3).sup() ;
    const  smallCompWord = "comp".fontsize(3).sup() ;
  
     result_p.innerHTML = `${converToward(user)}${smallUserWord} loses to  ${converToward(comp)}${smallCompWord}. You  Lost...`;
}
 
//function for   draw

function  draw(user ,  comp){

    const  smallUserWord = "user".fontsize(3).sup() ;
    const  smallCompWord = "comp".fontsize(3).sup() ;
    result_p.innerHTML = `${converToward(user)}${smallUserWord} equals  ${converToward(comp)}${smallCompWord}. It's a   Draw`;

}
 
//game  condition
function  game(userChoice){

    const  compChoice = getCompChoice();
     switch(userChoice+compChoice){
         case "rs":
         case "pr":
         case "sp":
             win(userChoice,compChoice);
             break;
         case "rp":
         case "ps":
         case "sr":
             lose(userChoice,compChoice);
              break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
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


























