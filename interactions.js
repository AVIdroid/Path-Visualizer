//interactions.js
export function setupInteractions(grid,nodes){
    let isDraggingStart = false;
    let isDraggingEnd = false;
    for(const row of grid){
        for(const node of row){
    
            const nodeElement=document.getElementById(
                `node-${node.row}-${node.col}`
            );
    
            // attach listeners here
            nodeElement.addEventListener("mousedown", () => {

                if(node === nodes.startNode){
                    isDraggingStart = true;
                }
            
                if(node === nodes.endNode){
                    isDraggingEnd = true;
                }
            
            });
            nodeElement.addEventListener("mouseenter", () => {

                if(isDraggingStart){
                    if(node.isWall){
                        alert("Can't select Wall!");
                        return;
                    }
                    if(node===nodes.startNode) return;
                    nodes.startNode.isStart = false;
                    node.isStart = true;
                    nodes.startNode = node;
                    updateNodeClasses();
                }
            
                if(isDraggingEnd){
        
                    if(node.isWall){
                        alert("Can't select Wall!");
                        return;
                    }
                    if(node===nodes.endNode) return;
                   nodes.endNode.isEnd = false;
                    node.isEnd = true;
                    nodes.endNode = node;
            
                    updateNodeClasses();
                }
            
            });
        }
    }
    document.addEventListener("mouseup", () => {

        isDraggingStart = false;
        isDraggingEnd = false;
    
    });
    function updateNodeClasses(){

        for(const row of grid){
    
            for(const node of row){
    
                const element=document.getElementById(
                    `node-${node.row}-${node.col}`
                );
    
                element.className="node";
    
                if(node.isWall)
                    element.classList.add("node-wall");
    
                if(node.isStart)
                    element.classList.add("node-start");
    
                if(node.isEnd)
                    element.classList.add("node-end");
            }
        }
    }
}