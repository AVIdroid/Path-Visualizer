export function createNode(row,col){
    return {
        row,
        col,
        isStart:false,
        isEnd:false,
        isWall:false,
        weight:1,

        isVisited:false,

        distance:Infinity,

        previousNode:null
    };
}
export function createGrid(rows,cols){
    const grid = [];

    for(let row=0;row<rows;row++){

        const currentRow=[];

        for(let col=0;col<cols;col++){
            currentRow.push(
                createNode(row,col)
            );
        }
        grid.push(currentRow);
    }

    return grid;
}
export function getNeighbors(node,grid){

    const neighbors=[];

    const row=node.row;
    const col=node.col;

    if(row>0)
        neighbors.push(grid[row-1][col]);

    if(row<grid.length-1)
        neighbors.push(grid[row+1][col]);

    if(col>0)
        neighbors.push(grid[row][col-1]);

    if(col<grid[0].length-1)
        neighbors.push(grid[row][col+1]);

    return neighbors;
}

export function getAllNodes(grid){

    const nodes=[];

    for(const row of grid){

        for(const node of row){

            nodes.push(node);
        }
    }

    return nodes;
}
export function cleargrid(grid){

    for(const row of grid){

        for(const node of row){
            if(node.isStart) continue;
            if(node.isEnd) continue;
            node.isWall = false;
            const element =document.getElementById(`node-${node.row}-${node.col}`);
            if(element){
                element.className = "node";
            }
        }
    }
}
export function clearPath(grid){
    for(const row of grid){
        for(const node of row){
            node.isVisited = false;
            node.distance = Infinity;
            node.previousNode = null;

            const element = document.getElementById(
                `node-${node.row}-${node.col}`
            );

            if(element){
                element.classList.remove("node-visited");
                element.classList.remove("node-shortest-path");
            }
        }
    }
}