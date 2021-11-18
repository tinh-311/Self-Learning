const para = document.querySelector('#name');

const buttonClickMe = document.querySelector('#btn1');

buttonClickMe.addEventListener('click', getName);

para.addEventListener('click', updateName);

function updateName(){
    let name = prompt('Enter the new name');
    para.textContent = 'Player 1:  ' + name;
}

function getName(){
    let name = prompt('Enter the your name');
    buttonClickMe.textContent = 'Name: ' + name;
}

//---------------
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }
      }
    
      guessCount++;
      guessField.value = '';
      guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    let main = document.querySelector('.main');
    main.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
  
const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = function() {
    let name = prompt('What is your name');
    alert(`Hello ${name} nice too see you !`);
    headingA.textContent = `Wellcome ${name}`;
}

//---------
const btn = document.querySelector('#btnStartMachine');
const txt = document.querySelector('#txtMachine');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}

//----
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
console.log(myArray);

let myNewString = myArray.join(',');
console.log(myNewString);

myArray.push('Cardiff');
myArray.push('Bradford', 'Brighton');

console.log(myArray)

// Class List
class List{
    #arr = []; // Private
    length; // Public

    constructor(){
        this.#arr = [];
        this.length = 0;
    };

    get(i){
        return this.#arr[i];
    };

    push(value){
        this.#arr[this.length++] = value;
    };

    pop(){
        this.length = --this.#arr.length;
    };

    print(){
        for(let i = 0; i < this.length; i++){
            console.log(this.#arr[i]);
        }
    }
};

var t = new List();

t.push(80);
t.push(200);

t.pop();

t.print();

// ---
function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function changeColor() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}