// script.js
import { createGrid, clearPath, cleargrid } from './grid.js';
import { bfs } from './bfs.js';
import { dfs } from './dfs.js';
import { dijkstra } from './dijkstra.js';
// import { biBFS } from './algorithms/biBFS.js';
import { generateRandomWalls } from "./maze.js";
import { visualize } from './animate.js';
import { setupInteractions } from './interactions.js';

const ROWS = 20;
const COLS = 50;
let grid = createGrid(ROWS,COLS);
let startNode = grid[10][10];
let endNode = grid[19][40];
startNode.isStart = true;
endNode.isEnd = true;
const nodes = {
    startNode,
    endNode
};
// Speed control
let animationSpeed = 20;
const speedSlider = document.getElementById("speed-slider");
speedSlider.addEventListener("input",()=>{
    animationSpeed = 101 - Number(speedSlider.value);
});
// Grid creation part
const container = document.getElementById("grid-container");
for(const row of grid){
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    for(const node of row){
        const cell = document.createElement("div");
        cell.className = "node";
        cell.id = `node-${node.row}-${node.col}`;
        if(node.isStart)
            cell.classList.add("node-start");
        if(node.isEnd)
            cell.classList.add("node-end");

        rowDiv.appendChild(cell);
    }
    container.appendChild(rowDiv);
}
setupInteractions(
    grid,
    nodes
);
// // Random grid generation
document.getElementById("randomMazeBtn").addEventListener("click",()=>{
    generateRandomWalls(
        grid,
        startNode,
        endNode
    );
});
// reset Button
document.getElementById("clear-btn").addEventListener("click",()=>{
    cleargrid(
        grid
    );
});
// Visualization part
const visualizeBtn = document.getElementById("visualize-btn");
visualizeBtn.addEventListener("click",()=>{
    const algo = document.getElementById("algo-select").value;
    if(algo=="bfs"){
        const visitedNodesInOrder = bfs(grid,nodes.startNode,nodes.endNode);
        visualize(visitedNodesInOrder,endNode,animationSpeed);
        clearPath(grid);
    }
    else if(algo=="dfs"){
        const visitedNodesInOrder = dfs(grid,nodes.startNode,nodes.endNode);
        visualize(visitedNodesInOrder,endNode,animationSpeed);
        clearPath(grid);
    }
    else{
        const visitedNodesInOrder = dijkstra(grid,nodes.startNode,nodes.endNode);
        visualize(visitedNodesInOrder,endNode,animationSpeed);
        clearPath(grid);
    }
});
