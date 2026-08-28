
export function getNodesInShortestPathOrder(endNode){
    const path=[];
    let node=endNode;
    while(!node.isStart){
        path.push(node);
        node=node.previousNode;
    }
    path.push(node);
    path.reverse();
    return path;
}
function animateShortestPath(path,animationSpeed){
    for(let i=0;i<path.length;i++){
        let node = path[i];
        setTimeout(()=>{
            const element=document.getElementById(`node-${node.row}-${node.col}`);
            element.classList.add("node-shortest-path");   
        },i*animationSpeed);
    }
}
function animateVisitedNodes(visitedNodesInOrder,shortestPath,animationSpeed){
    for(let i=0;i<visitedNodesInOrder.length;i++){
        let node=visitedNodesInOrder[i];
        setTimeout(()=>{
            const element=document.getElementById(`node-${node.row}-${node.col}`);
            element.classList.add("node-visited");  
            if(i==visitedNodesInOrder.length-1){
                animateShortestPath(shortestPath);
            } 
         },i*animationSpeed);
        }
}
export function visualize( visitedNodesInOrder,endNode,animationSpeed){
    const shortestPath = getNodesInShortestPathOrder(endNode);
    animateVisitedNodes(visitedNodesInOrder,shortestPath,animationSpeed);
}