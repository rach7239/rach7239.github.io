let body = document.querySelector('div');
body.addEventListener('click', giveAlert());

function giveAlert() {
    alert('this is an alert');
}

let labelElement = document.getElementById('label');
labelElement.innerText = 'You clicked the button!';

function sayHello(){
    let inputElement = document.getElementById('name-input');
    let name = inputElement.value;
  
    let outputElement = document.getElementById('output');
    outputElement.innerText = 'Hello ' + name + '!';
  }