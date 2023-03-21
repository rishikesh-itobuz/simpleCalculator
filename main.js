const display = document.querySelector(".display");
// const buttons = document.querySelectorAll("button");

// get all number buttons
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector('.clear');
const allClearButton = document.querySelector('.all-clear');
const decimalButton = document.querySelector('.decimal');
const equalButton=document.querySelector('.equal');

numberButtons.forEach((button)=>{   //creates array and stores all
  button.addEventListener('click',()=>{
    // console.log(button.textContent);
    display.value+=button.textContent;
  })
})

operatorButtons.forEach((button)=>{
  button.addEventListener('click',()=>{
    // console.log(button.textContent);
    display.value+=button.textContent;
  })
})

allClearButton.addEventListener('click',()=>{
  display.value=""
})

clearButton.addEventListener('click',()=>{
  display.value = display.value.slice(0,display.value.length-1)
})

equalButton.addEventListener('click',()=>{
  let input = display.value;
  let numbers = input.split(/\+|\-|\/|\*|\%/g);
  let operator = input.replace(/[0-9]|\./g, "");
  let result=0;
  for (let i = 0; i < operator.length; i++) {
    switch (operator[i]) {
      case "+":
         result = parseInt(numbers[i]) + parseInt(numbers[i+1]);
        display.value = result;
        break;

      case "-":
          result = parseInt(numbers[i]) - parseInt(numbers[i+1]);
          display.value = result;
          break;
      case "*":
            result = parseInt(numbers[i]) * parseInt(numbers[i+1]);
           display.value = result;
           break;
   
      case "/":
             result = parseInt(numbers[i]) / parseInt(numbers[i+1]);
             display.value = result;
             break;
      default:
        break;
    }
    
  }
})
