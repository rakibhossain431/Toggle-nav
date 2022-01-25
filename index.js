const menu = document.querySelector('.menu');

const body = document.querySelector('body');
const container = document.querySelector('.container');
const close = document.querySelector('.close');



const listenToMenuButton = () => {
    container.style.left = "225px"
    body.classList.add('show');
}


function removeOffCanvasMenu() {
    body.classList.remove('show');
    container.style.left = "0";
}

menu.addEventListener('click',listenToMenuButton);
close.addEventListener('click', removeOffCanvasMenu);