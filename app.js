const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultChoiceDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let computerChoice
let userChoice
let result

possibleChoices.forEach(possibleChoices =>possibleChoices.addEventListener('click',(e)=>{
    userChoice = e.target.id;
	userChoiceDisplay.innerHTML = userChoice;
	generateComputerChoice()
	getResult()
}))

function generateComputerChoice(){
	const randomNumber = Math.floor(Math.random() * 3 +1)   ///or you can use possibleChoices.length
// console.log(randomNumber)
	if (randomNumber === 1){
		computerChoice = 'rock'
	}
	if (randomNumber === 2){
		computerChoice = 'paper'
	}
	if (randomNumber === 3){
		computerChoice = 'scissor'
	}
	computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
	if(computerChoice === userChoice){
		result = "Its a draw"

	}
	if(computerChoice ==='rock' && userChoice === 'paper'){
		result = "You win!!"
	}
	if(computerChoice ==='paper' && userChoice === 'scissor'){
		result = "You win!!"
	}
	if(computerChoice ==='scissor' && userChoice === 'rock'){
		result = "You win!!"
	}
	if(computerChoice ==='paper' && userChoice === 'rock'){
		result = "Computer win!!"
	}
	if(computerChoice ==='rock' && userChoice === 'scissor'){
		result = "Computer win!!"
	}
	if(computerChoice ==='scissor' && userChoice === 'paper'){
		result = "Computer win!!"
	}
	resultChoiceDisplay.innerHTML = result;
}