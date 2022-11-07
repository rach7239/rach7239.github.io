window.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://dog-api.kinduff.com/api/facts';

async function getQuote() {
    //console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();

    let json_response = JSON.parse(response);
    //console.log(json_response);
    console.log(json_response['fact']);
    //.then(text => text.text());
    //console.log(text['mess']);
    displayQuote(json_response['fact']);
}

function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');
    //console.log('display quote working');
    //const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}

const source = "https://dog.ceo/api/breeds/image/random";

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 1);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}