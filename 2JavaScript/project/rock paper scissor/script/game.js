function getRandomChoice(){
   getRandomChoiceandomChoice =Math.floor(Math.random() * 3) + 1;
   return getRandomChoiceandomChoice;
}

function getComputerChoice(){
   let randomChoice = getRandomChoice();
   let computerChoice;
   if (randomChoice===1 ){
   computerChoice='✊Rock';
     }else if(randomChoice===2){
      computerChoice='🖐️Paper';
     }else if(randomChoice===3){
      computerChoice='✌️scissor';
     }

     return computerChoice;
}

function updateResult(userChoice,computerChoice,result){
   document.querySelector('#result').innerHTML=
   `You chose ${userChoice}.<br>
   I chose ${computerChoice}.<br>
   And the result is :${result}`;

   alert(`You chose ${userChoice}.<br>
   I chose ${computerChoice}.<br>
   And the result is :${result}`);
}

function getResult(userChoice,computerChoice){
     result;
  if (userChoice==computerChoice){
    result='Tie';
  }else if((computerChoice ==='✊ Rock' && userChoice === '✌️scissor')||
           (computerChoice === '✌️scissor' && userChoice === '🖐️Paper')||
           (computerChoice === '🖐️Paper' && userChoice === '✊ Rock')
   ){
   result='I win';
  }
  return result;
}

function rockClicked(){
   const userChoice='✊ Rock';
   let computerChoice=getComputerChoice();
   let result=getResult(userChoice,computerChoice);
   updateResult(userChoice,computerChoice,result);
  
   }

function paperClicked(){
   const userChoice='🖐️Paper';
   let computerChoiceText=getComputerChoice();
   let result=getResult(userChoice,computerChoiceText);
   updateResult(userChoice,computerChoiceText,result);
}

function scissorClicked(){
   const userChoice='✌️scissor';
   let computerChoiceText=getComputerChoice();
   let result=getResult(userChoice,computerChoiceText);
   updateResult(userChoice,computerChoiceText,result);

}