const container = document.createElement('div');
container.classList.add('container');
let subContainer;
const body = document.getElementsByTagName('BODY')[0];
function createGrid(size) {
    for (let i=0; i<size*size; i++){
        if (i%size == 0) {
            subContainer = document.createElement('div');
            subContainer.classList.add('sub-container');
        }
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${480/size}px`;
        square.style.height = `${480/size}px`;
        subContainer.appendChild(square);
        if ((i+1) % size ==0) {
            container.appendChild(subContainer);
        }
    }
    body.appendChild(container);    
}
function changeColor(event) {
  event.target.style.backgroundColor = 'black';
};
const button = document.querySelector('button');
button.addEventListener('click', () => {
    let size = prompt('How many squares do you want?');
    if (size > 100) {
        window.alert('Please only enter the number less than 100');
    }
    else {
        container.textContent = '';
        createGrid(size);
        let squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.addEventListener('mouseenter', changeColor);
        });
    }
});
createGrid(16);
let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', changeColor);
});
