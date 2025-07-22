var draws=0;
var humanScore=0;
var computerScore=0;
var roundsPLayed=0;
let computerChoice;


function getComputerChoice(){
  const randomNumber = Math.random()
  if(randomNumber<1/3){
   return computerChoice="rock";
  }
  else if(randomNumber>=2/3){
    return computerChoice="paper";
  }
  else{
    return computerChoice="scissors"
  }
}
computerChoice = getComputerChoice()
console.log(computerChoice)

const rockbtn = document.createElement("button");
bod.appendChild(rockbtn);
rockbtn.textContent="rock";
rockbtn.addEventListener("click",()=> {
    if(computerChoice==="rock"){
    content.textContent=`The computer selected ${computerChoice}, you selected rock. You draw this round `;
    draws+= 1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
  }
  else if(computerChoice==="paper"){
    content.textContent=`The computer selected ${computerChoice}, you selected rock. You lose this round `;
    computerScore+=1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
  }
  else if(computerChoice==="scissors"){
    content.textContent=`The computer selected ${computerChoice}, you selected rock. You win this round `;
    humanScore+=1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
    
  }
    if(humanScore>computerScore && roundsPLayed==5){
    content2.textContent="You win the game!!!";
   
    
  }
  else if(humanScore<computerScore && roundsPLayed==5){
    content2.textContent="You lose the game!!!";
 
    
  }
  else if(computerScore===humanScore && roundsPLayed==5) {
    content2.textContent="The game ends tied !!!";
   
    
  }
  if(roundsPLayed==6){
    window.location.reload(true);// reloads the page when clicking any button for the sixth time
    
  }
} );

const paperbtn= document.createElement("button");
bod.appendChild(paperbtn);
paperbtn.textContent="paper";
paperbtn.addEventListener("click",  ()=> {
    if(computerChoice==="rock"){
    content.textContent=`The computer selected ${computerChoice}, you selected paper. You win this round `;
    humanScore+=1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
  }
  else if(computerChoice==="paper"){
    content.textContent=`The computer selected ${computerChoice}, you selected paper. You draw this round `;
    draws+1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
  }
  else if(computerChoice==="scissors"){
    content.textContent=`The computer selected ${computerChoice}, you selected paper. You lose this round `;
    computerScore+=1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
  }
    if(humanScore>computerScore && roundsPLayed==5){
    content2.textContent="You win the game!!!";
    
    
  }
  else if(humanScore<computerScore && roundsPLayed==5){
    content2.textContent="You lose the game!!!";
    
  }
  else if(computerScore===humanScore && roundsPLayed==5) {
    content2.textContent="The game ends tied !!!";
    
    
  }
  if(roundsPLayed==6){
    location.reload(true);
    
  }

});

const scissorbtn= document.createElement("button");
bod.appendChild(scissorbtn);
scissorbtn.textContent="scissor";
scissorbtn.addEventListener("click", ()=> {
  if(computerChoice==="rock"){
    content.textContent=`The computer selected ${computerChoice}, you selected scissors. You lose this round `;
    computerScore+=1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
  }
  else if(computerChoice==="paper"){
    content.textContent=`The computer selected ${computerChoice}, you selected scissors. You win this round `;
    humanScore+=1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
  }
  else if(computerChoice==="scissors"){
    content.textContent=`The computer selected ${computerChoice}, you selected scissors. You draw this round `;
    draws+=1;
    roundsPLayed+=1;
    computerChoice=getComputerChoice();
    console.log(computerChoice);
    console.log(roundsPLayed);
  }
    if(humanScore>computerScore && roundsPLayed==5){
    content2.textContent="You win the game!!!";
    
    
  }
  else if(humanScore<computerScore && roundsPLayed==5){
    content2.textContent="You lose the game!!!";
   
    
  }
  else if(computerScore===humanScore && roundsPLayed==5) {
    content2.textContent="The game ends tied !!!";
    
    
  }
  if(roundsPLayed==6){
   location.reload(true);
    
  }
} 
);

const content = document.createElement("div");
bod.appendChild(content);

const content2= document.createElement("div");
bod.appendChild(content2)

 







