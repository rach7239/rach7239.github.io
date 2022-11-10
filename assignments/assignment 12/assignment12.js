const output1 = document.querySelector('.output1');
let outputInt = parseInt(output1.textContent);
console.log(outputInt);

const output2 = document.querySelector('.output2');
let outputInt2 = parseInt(output2.textContent);
console.log(outputInt2);

const output3 = document.querySelector('.output3');
let outputInt3 = parseInt(output3.textContent);
console.log(outputInt3);

function random1() {
    outputInt = randomNumber(100,999);
    output1.textContent = outputInt;
}
function random2() {
    outputInt2 = randomNumber(100,999);
    output2.textContent = outputInt2;
}
function random3() {
    outputInt3 = randomNumber(1000,9999);
    output3.textContent = outputInt3;
}

function randomNumber(min,max) {
    const num = Math.floor(Math.random()*(max - min +1)) + min;
    return num;
}

function submit() {
    var result1 = outputInt;
    var result2 = outputInt2;
    var result3 = outputInt3;
    alert(result1 + '-' + result2 + '-' + result3)
}

const randomButton1 = document.querySelector('.random-button1').addEventListener('click', random1);
const randomButton2 = document.querySelector('.random-button2').addEventListener('click', random2);
const randomButton3 = document.querySelector('.random-button3').addEventListener('click', random3);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);