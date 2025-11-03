let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.number');
let currentNumber = '';
let emptyDisplay=document.querySelector('.clear')
let operationButtons = document.querySelectorAll('.operator');
let equalsButton = document.querySelector('.equals');


numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        let newDigit = button.textContent;           // 1. Получить цифру
        currentNumber = currentNumber + newDigit;    // 2. Добавить к числу
        display.textContent = currentNumber;         // 3. Обновить экран
    });
});

emptyDisplay.addEventListener('click', function() {
        currentNumber = "";
        display.textContent = "0";  
    })

    let firstNumber="";
    

operationButtons.forEach(button => {
    button.addEventListener('click', function() {
        currentOperation = button.textContent;
        firstNumber=currentNumber;
        currentNumber="";
        displayValue =  firstNumber+" "+currentOperation+" "+currentNumber;
         display.textContent = displayValue; 

    }); 
});


equalsButton.addEventListener('click', function() {
    let num1 = Number(firstNumber);
    let num2 = Number(currentNumber);
    let result;
    
    if (currentOperation === '+') {
        result = num1 + num2;
    } else if (currentOperation === '-') {
        result = num1 - num2;
    } else if (currentOperation === '×') {
        result = num1 * num2;
    } else if (currentOperation === '÷') {
        result = num1 / num2;
    }
    
    display.textContent = result;
});