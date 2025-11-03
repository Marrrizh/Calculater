let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.number');
let currentNumber = '';
let emptyDisplay=document.querySelector('.clear')
let operationButtons = document.querySelectorAll('.operator');


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
        let newDigit = button.textContent;
        currentNumber = currentNumber + newDigit;
        displayValue = currentNumber;          // Новая переменная!
        display.textContent = displayValue;    // Показываем её
    });
});