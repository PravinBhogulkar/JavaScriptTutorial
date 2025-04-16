let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

showCalcution();
function updateCalculation(value){
    calculation += value;
    showCalcution();
    console.log(calculation);
}

function showCalcution() {
    document.querySelector  ('.js-calculation').innerHTML = calculation;
}
