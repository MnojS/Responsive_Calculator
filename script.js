const display_1 = document.querySelector(".display_1");
const display_2 = document.querySelector(".display_2");
const tempResult = document.querySelector(".result");
const numbers = document.querySelector(".number");
const operation = document.querySelector(".operation"); 
const reset = document.querySelector(".reset");
const backspace = document.querySelector(".backspace");
const equal = document.querySelector(".equals");

let displayOne='';
let displayTwo='';
let result = null;
let lastOperation='';
isDecimal=false;

numbers.forEach(number => {
    number.addEventListener("click",(e)=>{
        if (e.target.innerText === '.' && !isDecimal) {
            isDecimal=true;
        }
        else if(e.target.innerText === '.' && isDecimal){
            return;
        }
        displayTwo += e.target.innerText;
        display_2.innerText=displayTwo;
    })
    displayTwo += e.target.innerText;
    display_2.innerText = displayTwo;
    
});

