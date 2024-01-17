//Functions for basic arithmetic

function add(a,b) {
    return parseInt(a) + parseInt(b);
}
function subtract(a,b) {
    return parseInt(a) - parseInt(b);
}
function multiply(a,b) {
    return parseInt(a) * parseInt(b);
}
function divide(a,b) {
    return parseInt(a) / parseInt(b);
}

//Function to call specific arithmetic operators depending on input

function operate(operator, a, b) {
    console.log(a, operator, b)
    if (operator == '+'){
        firstNumber = add(a,b);
        display.textContent = firstNumber;
        return;
    }
    else if (operator == '-'){
        firstNumber = subtract(a,b);
        display.textContent = firstNumber;
        return;
    }
    else if (operator == '*'){
        firstNumber = multiply(a,b);
        display.textContent = firstNumber;
        return;
    }
    else if (operator == '/'){
        if (b === 0 || b === '0'){
            display.textContent = 'ERROR'
        }
        else {
        firstNumber = divide(a,b);
        display.textContent = firstNumber;
        }
        return;
    }
}

//Variables connected to calculator buttons

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const star = document.querySelector(".star");
const slash = document.querySelector(".slash");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const display = document.querySelector(".display");

display.textContent = '0'; //Set default display to zero
let displayContent = '';

//functions to add numbers to display

function pressOne() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '1';
    displayContent = display.textContent;
    afterOperand = false;
}function pressTwo() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '2';
    displayContent = display.textContent;
    afterOperand = false;
}function pressThree() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '3';
    displayContent = display.textContent;
    afterOperand = false;
}function pressFour() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '4';
    displayContent = display.textContent;
    afterOperand = false;
}function pressFive() {
    if (display.textContent==='ERROR'){pressClear()}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '5';
    displayContent = display.textContent;
    afterOperand = false;
}function pressSix() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '6';
    displayContent = display.textContent;
    afterOperand = false;
}function pressSeven() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '7';
    displayContent = display.textContent;
    afterOperand = false;
}function pressEight() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '8';
    displayContent = display.textContent;
    afterOperand = false;
}function pressNine() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '9';
    displayContent = display.textContent;
    afterOperand = false;
}function pressZero() {
    if (display.textContent==='ERROR'){pressClear()}
    if(display.textContent==='0'){display.textContent=''}
    if(afterEquals){pressClear()}
    display.textContent = displayContent + '0';
    displayContent = display.textContent;
    afterOperand = false;
}function pressClear() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.textContent = '0';
    displayContent = '';
    afterEquals = false;
    afterOperand = false;
}

//listeners to call display functions when buttons are pressed

one.addEventListener('click', ()=>pressOne());
two.addEventListener('click', ()=>pressTwo());
three.addEventListener('click', ()=>pressThree());
four.addEventListener('click', ()=>pressFour());
five.addEventListener('click', ()=>pressFive());
six.addEventListener('click', ()=>pressSix());
seven.addEventListener('click', ()=>pressSeven());
eight.addEventListener('click', ()=>pressEight());
nine.addEventListener('click', ()=>pressNine());
zero.addEventListener('click', ()=>pressZero());
clear.addEventListener('click', ()=>pressClear());

//variables for use in operating functions

let firstNumber = '';
let secondNumber = '';
let operator = '';
let afterEquals = false;
let afterOperand = false;

//functions for managing variables and display when operator is pressed. 

function pressPlus() {
    if (display.textContent==='ERROR'){pressClear()}
    if (afterEquals || afterOperand) {//do nothing
    }
    else if(firstNumber !== '') {
        secondNumber = display.textContent;
        operate(operator, firstNumber, secondNumber);
    }
    else if(firstNumber === ''){
        firstNumber = displayContent;
    }
    secondNumber = '';
    displayContent = '';
    operator = '+';
    afterEquals = false;
    afterOperand = true;
}
function pressMinus() {
    if (display.textContent==='ERROR'){pressClear()}
    if (afterEquals || afterOperand) {//do nothing
    }
    else if(firstNumber !== '') {
        secondNumber = display.textContent;
        operate(operator, firstNumber, secondNumber);
    }
    else if(firstNumber === ''){
        firstNumber = displayContent;
    }
    secondNumber = '';
    displayContent = '';
    operator = '-';
    afterEquals = false;
    afterOperand = true;
}
function pressStar() {
    if (display.textContent==='ERROR'){pressClear()}
    if (afterEquals || afterOperand) {//do nothing
    }
    else if(firstNumber !== '') {
        secondNumber = display.textContent;
        operate(operator, firstNumber, secondNumber);
    }
    else if(firstNumber === ''){
        firstNumber = displayContent;
    }
    secondNumber = '';
        displayContent = '';
    operator = '*';
    afterEquals = false;
    afterOperand = true;
}
function pressSlash() {
    if (display.textContent==='ERROR'){pressClear()}
    if (afterEquals || afterOperand) {//do nothing
    }
    else if(firstNumber !== '') {
        secondNumber = display.textContent;
        operate(operator, firstNumber, secondNumber);
    }
    else if(firstNumber === ''){
        firstNumber = displayContent;
    }
    secondNumber = '';
    displayContent = '';
    operator = '/';
    afterEquals = false;
    afterOperand = true;
}

function pressEquals() {
    if (display.textContent==='ERROR'){pressClear()}
    if (firstNumber == ''){firstNumber = display.textContent;}
    else if(secondNumber == ''){secondNumber = display.textContent;}
    operate(operator, firstNumber, secondNumber);
    displayContent = '';
    afterEquals = true;
    afterOperand = false;
    }

//add listeners to operator buttons

plus.addEventListener('click', () => pressPlus());
minus.addEventListener('click', () => pressMinus());
star.addEventListener('click', () => pressStar());
slash.addEventListener('click', () => pressSlash());
equals.addEventListener('click', () => pressEquals());