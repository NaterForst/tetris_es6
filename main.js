// main

const canvas = document.getElementById('tetris_board');
const ctx = canvas.getContext('2d');

// Size of the canvas from constants
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

