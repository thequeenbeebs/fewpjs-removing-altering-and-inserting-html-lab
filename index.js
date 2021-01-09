// Write your code here!

let element = document.querySelector("main");

element.remove();

let newHeader;

let victory = document.createElement('h1');
victory.id = "victory";

document.body.appendChild(victory);

newHeader = document.querySelector('h1#victory');

newHeader.innerHTML = "is the champion";



