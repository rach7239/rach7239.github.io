const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 102 Fahrenheit, so :insertx: decided to go to the ice cream shop. When they got to the shop, they chose :inserty:. After leaving the ice cream shop, they :insertz:. They had a great time, but they decided to go to the gym because :insertx: does weigh 625 pounds.';
const insertX = ['Santa', 'Mickey Mouse', 'Barbie'];
const insertY = ['chocolate ice cream', 'cotton candy ice cream', 'strawberry ice cream'];
const insertZ = ['decided to go to the swimming pool','went for a walk at the park','hung out with their neighborhood friends'];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);
    newStory = newStory.replace(':insertx:',xItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const stonesPerPound = 0.0714286;
    const weight = Math.round(300*stonesPerPound)+' stone';
    const temperature =  Math.round((102-32)*5/9)+' centigrade';
    newStory = newStory.replace("102 Fahrenheit", temperature);
    newStory = newStory.replace("625 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}