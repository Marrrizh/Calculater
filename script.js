let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.number');
let currentNumber = '';
let emptyDisplay=document.querySelector('.clear')


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
