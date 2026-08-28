export function generateRandomWalls(grid,startNode,endNode){
    for(let row of grid){
        for(let node of row){

            if(node===startNode || node===endNode){
                continue;
            }

            node.isWall=Math.random()<0.1;
            const element=document.getElementById(
                `node-${node.row}-${node.col}`
            );  
            if(node.isWall){
                element.className="node wall";
            }else{
                element.className="node";
            }
        }
    }
}