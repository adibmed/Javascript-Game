const grid = document.querySelector('.grid');
let squares = Array.from(grid.querySelector('div'));
const width = 10;
const height = 10;
let currentPosition  = 4;

//The Tetrominoes
const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
]

const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
]

const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
]

const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
]

const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
]

const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

//Randomly Select Tetromino
let random = Math.floor(Math.random() * theTetrominoes.length)
let currentRotation = 0;
let current = theTetrominoes[random][current];

// move the Terominoes down 
function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('block');
    });
}


// undraw the shape
function undraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('block');
    })
}


// move down shape 
function moveDown() {
    undraw();
    currentPosition = current += width;
    draw();
    freeze();
}

// move left and prevent collistin with dhape moving left
function freeze() {
    undraw();
    con
}
