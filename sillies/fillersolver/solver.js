const canvas = document.getElementById("colorcanvas");
const ctx = canvas.getContext("2d");

canvas.width = 768
canvas.height = 600

ctx.fillStyle = "rgb(200, 200, 200)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const squareSize = 65;
const leftOffset = canvas.width / 2 - (squareSize * 4) 
const topMargin = 10;

const unfill = 0;
const red = 1;
const green = 2;
const yellow = 3;
const blue = 4;
const purple = 5;
const black = 6;

let selectedColor = 1;

let currentGame = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];

for(let x = 0; x < 8; x++)
{
    for(let y = 0; y < 7; y++)
    {
        ctx.fillStyle = "rgb(0, 0, 0)";
        ctx.strokeRect(leftOffset + (x * squareSize), y * squareSize + topMargin, squareSize,  squareSize)      
    }
}