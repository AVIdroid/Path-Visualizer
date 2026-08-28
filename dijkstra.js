import { getNeighbors, getAllNodes } from './grid.js';

export function dijkstra (grid, startNode, endNode) {
    startNode.distance = 0;
    const visitedNodesInOrder=[];
    const unvisitedNodes = getAllNodes(grid);
    while(unvisitedNodes.length){
        unvisitedNodes.sort((a,b)=>a.distance-b.distance);
        const closestNode = unvisitedNodes.shift();
        if(closestNode.isWall) continue;
        if(closestNode.distance===Infinity) return visitedNodesInOrder;
        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if(closestNode===endNode)  return visitedNodesInOrder;
        const neighbors = getNeighbors(closestNode, grid);
        for(const neighbor of neighbors){
            if(neighbor.isWall) continue;
            if(neighbor.isVisited) continue;
            const tentativeDistance = closestNode.distance + neighbor.weight;
            if(tentativeDistance<neighbor.distance){
                neighbor.distance = tentativeDistance;
                neighbor.previousNode = closestNode;
            }
        }
    }
    if(endNode.previousNode === null){
        alert("No path exists!");
    }
    return visitedNodesInOrder;
}