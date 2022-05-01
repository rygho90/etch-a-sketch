const easContainer = document.querySelector('.eas-container');
const sizeButton = document.querySelector('.btn');
let gridSize = 16;

function drawGrid() {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        let gridBox = document.createElement('div');
        gridBox.addEventListener('mouseover', () => {
            gridBox.style.backgroundColor = 'black';
        })
        easContainer.append(gridBox);
    }
}

drawGrid();

sizeButton.addEventListener('click', () => {
    gridSize = prompt("Enter a grid size (1-100): ")
    while (easContainer.firstChild) {
        easContainer.removeChild(easContainer.lastChild);
    }
    if (gridSize <= 100 && gridSize >= 1) {
        easContainer.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
        easContainer.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;
        drawGrid();
    }
})
