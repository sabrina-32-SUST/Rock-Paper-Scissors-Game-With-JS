const   userScore = 0;
const   compScore = 0;

const    userScore_span = document.getElementById("user-score");
const    compScore_span = document.getElementById("comp-score");
const   scoreBoard_div = document.querySelector(".score-board");

const   result_div = document.querySelector(".result");
const   rock_div = document.getElementById("r");
const   paper_div = document.getElementById("p");
const   scissors_div = document.getElementById("s");


rock_div.addEventListener('click',  function(){
    console.log("hey   you  click  on  Rock");

})

paper_div.addEventListener('click',  function(){
    console.log("hey   you  click  on  Paper");

})
scissors_div.addEventListener('click',  function(){
    console.log("hey   you  click  on  Scissor");

})

