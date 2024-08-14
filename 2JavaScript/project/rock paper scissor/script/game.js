let score={
   computer:0,
   user:0,
   tie:0,

};


function getRandomChoice(){
   let randomChoice =Math.floor(Math.random() * 3) + 1;
   return randomChoice;
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

   document.querySelector('#score').innerHTML=`
   score:computerWon:${score.computer},userWon:${score.user},Tie:${score.tie}`;
   document.querySelector('#result').innerHTML=
   `You chose ${userChoice}.<br>
   I chose ${computerChoice}.<br>
   And the result is :${result}`;

   alert(`You chose ${userChoice}.<br>
   I chose ${computerChoice}.<br>
   And the result is :${result}`);
}

function computeResult(userChoice,computerChoice){
    let result ='Unknown';
  if (userChoice==computerChoice){
    result='Tie';
    score.tie++;
  }else if((computerChoice ==='✊ Rock' && userChoice === '✌️scissor')||
           (computerChoice === '✌️scissor' && userChoice === '🖐️Paper')||
           (computerChoice === '🖐️Paper' && userChoice === '✊ Rock')
   ){
   result='I win';
   score.computer++;
  }else{
   result='You win';
   score.user++;
  }
  return result;
}

function rockClicked(){
   const userChoice='✊ Rock';
   let computerChoice=getComputerChoice();
   let result=computeResult(userChoice,computerChoice);
   updateResult(userChoice,computerChoice,result);
  
   }

function paperClicked(){
   const userChoice='🖐️Paper';
   let computerChoiceText=getComputerChoice();
   let result=computeResult(userChoice,computerChoiceText);
   updateResult(userChoice,computerChoiceText,result);
}

function scissorClicked(){
   const userChoice='✌️scissor';
   let computerChoiceText=getComputerChoice();
   let result=computeResult(userChoice,computerChoiceText);
   updateResult(userChoice,computerChoiceText,result);

}