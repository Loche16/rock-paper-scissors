
let humanscore=0
let computerscore=0
let draws= 0
let x;
 for(i=0; i<5; i++){
function getComputerChoice(numb){
  x = Math.floor(Math.random() * numb);
if (x===0){
    return "rock" ;
}
else if( x===1){
    return "paper" ;
}
else if( x===2) {
    return "scissors" ;
}
}
let computerChoice= getComputerChoice(3)

console.log(computerChoice)

let y;
function getHumanChoice(){
 y= prompt("Choose rock, paper, scissors.").toLowerCase()
if (y==="rock"){
    return "rock" ;
}
else if( y==="paper"){
    return "paper" ;
}
else if(y==="scissors"){
    return "scissors" ;
}
}


let humanChoice= getHumanChoice()
console.log(humanChoice)


if (humanChoice==="rock"&& computerChoice==="rock"){
    console.log("Draw");
    draws++;
}
else if(humanChoice==="rock" && computerChoice==="paper"){
    console.log("Lose");
    computerscore++;
}
else if(humanChoice==="rock" && computerChoice==="scissors"){
    console.log("Win");
    humanscore++;
}
else if(humanChoice==="paper" && computerChoice=="rock"){
    console.log("Win");
    humanscore++;
}
else if(humanChoice==="paper" && computerChoice==="paper"){
    console.log("Draw");
    draws++;
}
else if(humanChoice==="paper" && computerChoice==="scissors"){
    console.log("Lose");
    computerscore++;
}
else if(humanChoice==="scissors" && computerChoice==="rock"){
    console.log("Lose");
    computerscore++;
}
else if(humanChoice==="scissors" && computerChoice==="paper"){
    console.log("Win");
    humanscore++;
}
else {
    console.log("Draw");
    draws++;
}    
}
if(humanscore>computerscore){
    console.log("You win the game!!!")
}
else if(computerscore>humanscore){
    console.log("You lose the game!!!")
}
else {
    console.log("The game ends in a draw!!!")
}