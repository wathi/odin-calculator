let content = '0';
let tempVar1 = '';
let operator = '';
let tempVar2 = '';
let result = 0;


const display = document.querySelector('#display');
display.textContent = content;   

const one = document.querySelector('#one');
one.onclick = () => {
    if (content === '0'){
        content = '1';
    } else {
        content += '1';
    }

    if(operator === ''){
        tempVar1 += '1';
    } else {
        tempVar2 += '1';
    }
    
    display.textContent = content; 
    viewConsole();
};


const add = document.querySelector('#add');
add.onclick = () => {
    
    if (tempVar2 === '') {
        operator = '+'
        content = tempVar1 + operator;
    }
    
    display.textContent = content; 
    viewConsole();
};

const equal = document.querySelector('#equal');
equal.onclick = () => {
    
    if (tempVar1 !== '' && operator !== '' && tempVar2 !== '') {
        if (operator === '+'){
            result = addFunc(tempVar1, tempVar2);
        }

        display.textContent = result;
        reset();        
    }
};

const addFunc = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
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
