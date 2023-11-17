let content = '0';
let tempVar1 = '';
let operator = '';
let tempVar2 = '';
let result = 0;


const display = document.querySelector('#display');
display.textContent = content;   

//Number
const one = document.querySelector('#one');
one.onclick = () => enterNum('1');

const two = document.querySelector('#two');
two.onclick = () => enterNum('2');

const three = document.querySelector('#three');
three.onclick = () => enterNum('3');

const four = document.querySelector('#four');
four.onclick = () => enterNum('4');

const five = document.querySelector('#five');
five.onclick = () => enterNum('5');

const six = document.querySelector('#six');
six.onclick = () => enterNum('6');

const seven = document.querySelector('#seven');
seven.onclick = () => enterNum('7');

const eight = document.querySelector('#eight');
eight.onclick = () => enterNum('8');

const nine = document.querySelector('#nine');
nine.onclick = () => enterNum('9');

//Operator
const add = document.querySelector('#add');
add.onclick = () => enterOperator('+');

const subtract = document.querySelector('#subtract');
subtract.onclick = () => enterOperator('-');

const multiply = document.querySelector('#multiply');
multiply.onclick = () => enterOperator('*');

const divide = document.querySelector('#divide');
divide.onclick = () => enterOperator('/');

const enterNum = (num) => {
    if (content === '0'){
        content = num;
    } else {
        content += num;
    }

    if(operator === ''){
        tempVar1 += num;
    } else {
        tempVar2 += num;
    }
    
    display.textContent = content; 
    viewConsole();
}

const enterOperator = (opr) => {
    if (tempVar1 === '') {
        operator = opr
        tempVar1 = '0';
        content = tempVar1 + operator;
    }

    if (tempVar1 !== '' && tempVar2 === '') {
        operator = opr
        content = tempVar1 + operator;
    }
    
    display.textContent = content; 
    viewConsole();
}

const equal = document.querySelector('#equal');
equal.onclick = () => {
    
    if (tempVar1 !== '' && operator !== '' && tempVar2 !== '') {
        if (operator === '+'){
            result = addFunc(tempVar1, tempVar2);
        }

        if (operator === '-'){
            result = subtractFunc(tempVar1, tempVar2);
        }

        if (operator === '*'){
            result = multiplyFunc(tempVar1, tempVar2);
        }

        if (operator === '/'){
            result = divideFunc(tempVar1, tempVar2);
        }

        display.textContent = result;
        reset();        
    }
};

const addFunc = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

const subtractFunc = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplyFunc = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

const divideFunc = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

const reset = () => {
    content = '0';
    tempVar1 = '';
    operator = '';
    tempVar2 = '';
}

const viewConsole = () => {
    console.log(tempVar1);
    console.log(operator);
    console.log(tempVar2);
    console.log(result);
}
