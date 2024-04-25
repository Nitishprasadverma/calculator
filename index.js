function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    if(num2 === 0){
     throw new error("oops division by zero nice try !");
    } 
    else
    return num1 / num2;
}

// let firstNumber, secondNumber, operator  

const operate = (operator, firstNumber, secondNumber) => {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
            break;

        case "*":
            return multiply(firstNumber, secondNumber);
            break;

        case "/":
            return divide(firstNumber, secondNumber);
            break;

        default:
            return "invalid operator"
            
    }
}



const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener("click", ()=>{
        let btnvalue = button.value;
        if(btnvalue === "="){
            calculate();
            return;
        }

        else if( btnvalue === "C"){
             allClear();
             return;
        }

        else if( btnvalue === "delete"){
            deleteValue();
            return;
        }
        display(btnvalue);
        
    })
})

// diplay value which is being displaye in output field
let displayValue = "";

function display(btnvalue){
    displayValue += btnvalue;
    displayValueOnPage();
}


// updating the value inside the output

function displayValueOnPage(){
    const diplaynumber = document.querySelector('.output');
    diplaynumber.textContent = displayValue;
}
//All value clear function 
function allClear(){
    displayValue = ""
    displayValueOnPage();
}

// deleting value one by one 
function deleteValue(){
    displayValue = displayValue.slice(0,-1);
    displayValueOnPage();
}

function calculate(){
    
    const tokens = displayValue.match(/[\d.]+|[^\d.]+/g);
    console.log(tokens);
    
    // let tokens = ['45','+','5']
    let num1 = Number(tokens[0]);
    console.log(num1);
    for(let i = 1; i<tokens.length; i += 2){

        let operator = tokens[i];
        const num2 = Number(tokens[i+1]);
        console.log(operator);
        console.log(num2);

        switch(operator){

            case '+':
                num1 = add(num1,num2);
               
                break;
                case '-':
                num1 = subtract(num1,num2);
                break;
                case '*':
                num1 = multiply(num1,num2);
                break;
                case '/':
                if(num2 === 0){
                    // throw new Error("nice try")
                    allClear();
                    display("nice try ! oops can't divide by zero")
                }
                num1 = divide(num1,num2);
                break;
                case '+':
                num1 = add(num1,num2);
                break;

                default:
                    throw new error("invalid operator entered !");

        }
      
        

    }
    
    allClear();
    display(num1);
}

// function calculate(){

//     let tokens =
// }

// let firstNum = "";
// let secondNum;
// let op = "";
//  let  value =  buttons.forEach((button) =>{

//     button.addEventListener("click", ()=>{
//         let click = button.value;
        
//             if(click == 1 || click == 2 ||  click == 3 ||  click == 4 ||  click == 5 ||  click == 6 || click == 7 ||  click == 8 ||  click == 9 || click == 0 ||click == '.' ){
//             firstNum += click;
            
//             console.log("firstNum is ", firstNum);
//             return
//             }
//             else if( click == '+' || click == '-' || click == '*' || click == '/') {
//                 if(click == 1 || click == 2 ||  click == 3 ||  click == 4 ||  click == 5 ||  click == 6 || click == 7 ||  click == 8 ||  click == 9 || click == 0 ||click == '.'){
//                     secondNum += click;
//                     console.log(secondNum);
//                 }
//                 op += click
//                 console.log("op",op);
//             }

//             else{
//                 return ;
//             }
    
//     //         else if( click === '+' || '-' || '*' || '/'  ){
//     // op += click;
//     // console.log("op", op);
//     //         }
        
//     })


//  })
 
 
 