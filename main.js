
//Selected-boxes class added on mouseover

var boxes = document.getElementsByTagName('div');

function colorChange() {
    for (i = 0; i < boxes.length; i++) {
        boxes[i].classList.add('selected-boxes');
    } 
}

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', colorChange);
}

//Selected-boxes class removed on mouseleave

function colorChangeBack() {
    for (i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('selected-boxes');
    }
}

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseleave', colorChangeBack);
}

//Show message when box 1 is clicked

newElement = document.createElement('p');
elementText = document.createTextNode('Oooh - close but no cigar');
newElement.appendChild(elementText);
var mainParagraph = document.querySelector('main-p');
var boxOne = document.querySelector('.box-1');

function messageOne () {
    document.querySelector('.main-p').appendChild(newElement);
}

boxOne.addEventListener('click', messageOne);

//Show message when box 2 is clicked

newElementTwo = document.createElement('p');
elementTextTwo = document.createTextNode('DING DING DING - We have a winner');
newElementTwo.appendChild(elementTextTwo);
var boxTwo = document.querySelector('.box-2');

function messageTwo () {
    document.querySelector('.main-p').appendChild(newElementTwo);
}
 
boxTwo.addEventListener('click', messageTwo);

//Show message when box 3 is clicked

newElementThree = document.createElement('p');
elementTextThree = document.createTextNode('Oops, better luck next time');
newElementThree.appendChild(elementTextThree);
var boxThree = document.querySelector('.box-3');

function messageThree () {
    document.querySelector('.main-p').appendChild(newElementThree);
}

boxThree.addEventListener('click', messageThree);    

//Show start over button when any box is clicked

var hiddenButton = document.getElementsByTagName('a');


function toggleButton() {
   hiddenButton[0].classList.add('show');
}

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', toggleButton);
}

