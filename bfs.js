// algorithms/bfs.js

import { getNeighbors } from './grid.js';

/**
 * Breadth-first search from startNode to endNode.
 *
 * @param {Array<Array<Object>>} grid - 2D array of node objects (see grid.js createNode)
 * @param {Object} startNode - the node to search from
 * @param {Object} endNode   - the node to search for
 * @returns {Array<Object>} visitedNodesInOrder - nodes in the exact order BFS visited them,
 */
export function bfs(grid, startNode, endNode) {
  const visitedNodesInOrder = [];
  const queue = [];
  startNode.isVisited = true;
  queue.push(startNode);
  while(queue.length>0){
    const currNode=queue.shift();
    visitedNodesInOrder.push(currNode);
    if(currNode===endNode) return visitedNodesInOrder;
    const neighbors = getNeighbors(currNode, grid);

    for(const neighbor of neighbors){
    
        if(neighbor.isWall) continue;
        if(neighbor.isVisited) continue;
        neighbor.isVisited = true;    
        neighbor.previousNode = currNode;
        queue.push(neighbor);
    }
  }
  if(endNode.previousNode === null){
    alert("No path exists!");
}
  return visitedNodesInOrder;
}