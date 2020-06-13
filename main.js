var boxes = document.getElementsByTagName('div');

//Selected-Boxes Class Added on Mouse Over

function colorChange() {
    for (i = 0; i < boxes.length; i++) {
        boxes[i].classList.add('selected-boxes');
    } 
}

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', colorChange);
}

//Selected-Boxes Class Removed on Mouse Leave

function colorChangeBack() {
    for (i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('selected-boxes');
    }
}

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseleave', colorChangeBack);
}





