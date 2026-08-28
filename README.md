# 🗺️ Path-Visualizer

An interactive web-based visualizer for understanding classic **pathfinding algorithms**. Watch in real-time as Dijkstra's, BFS, and DFS explore a grid to find the shortest path—perfect for learning algorithm behavior!

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## ✨ Features

🔍 **Multiple Algorithms**
- **Dijkstra's Algorithm** - Finds the shortest path using a greedy approach
- **Breadth-First Search (BFS)** - Explores nodes level by level
- **Depth-First Search (DFS)** - Explores as far as possible along each branch

🌀 **Maze Generation**
- Randomly generate obstacles to test algorithms on different scenarios
- Visual exploration patterns unique to each algorithm

🎚️ **Interactive Controls**
- Drag start and end nodes to any position
- Adjust animation speed (slow, normal, fast)
- Clear grid and generate new mazes on demand
- Visual distinction between explored nodes, walls, and paths

📊 **Real-Time Visualization**
- See the exploration process step-by-step
- Color-coded cells show algorithm state (searching, path found, obstacles)
- Smooth animations for better understanding

---

## 🎯 Why This Project?

Built to demonstrate:
- ✅ **Algorithm Implementation** - Understanding how classic CS algorithms work
- ✅ **Data Structures** - Using queues, stacks, and priority queues effectively
- ✅ **Visualization Skills** - Making complex concepts visually understandable
- ✅ **JavaScript Mastery** - DOM manipulation and interactive web applications
- ✅ **Problem-Solving** - Implementing efficient shortest path solutions

Perfect for **interview preparation**, **algorithm learning**, or **portfolio showcase**!

---

## 🚀 Quick Start

### Direct 
1. Download or clone the repository
2. Open `index.html` in your browser
3. Start visualizing!

```bash
git clone https://github.com/AVIdroid/Path-Visualizer.git
cd Path-Visualizer
# Open index.html in your browser
```

### Screenshots
<img width="1840" height="886" alt="Screenshot 2026-08-18 001042" src="https://github.com/user-attachments/assets/310c146d-aba1-4f98-af3d-1337221fb09a" />
<img width="1915" height="867" alt="Screenshot 2026-08-18 001116" src="https://github.com/user-attachments/assets/0f285dd1-e82c-45f6-a304-6e07b810c28a" />


---

## 📖 How to Use

### Getting Started
1. **Set Start Point** - Click the grid to place the start node (green)
2. **Set End Point** - Click another cell to place the end node (red)
3. **Add Obstacles** - Click and drag to draw walls (black cells)
4. **Generate Maze** - Click "Generate Maze" for random obstacles
5. **Choose Algorithm** - Select from Dijkstra's, BFS, or DFS
6. **Visualize** - Click "Visualize" to watch the algorithm explore
7. **Adjust Speed** - Use the slider to control animation speed

### Controls
| Button/Input | Action |
|--------------|--------|
| **Choose Algorithm** | Select which algorithm to visualize |
| **Visualize** | Start the animation |
| **Clear Path** | Remove visualization, keep walls |
| **Clear Board** | Reset entire grid |
| **Generate Maze** | Create random wall patterns |
| **Speed Slider** | Adjust animation speed (1-50ms per step) |

---

## 🧮 Algorithm Comparison

| Algorithm | Time Complexity | Space | Best For | Pattern |
|-----------|-----------------|-------|----------|---------|
| **Dijkstra's** | O((V+E) log V) | O(V) | Weighted graphs | Expands in radius from start |
| **BFS** | O(V+E) | O(V) | Unweighted graphs | Explores layer by layer |
| **DFS** | O(V+E) | O(V) | Graph traversal | Explores deeply first |

### Visual Differences
- **Dijkstra's**: Creates a circular/radial exploration pattern
- **BFS**: Explores in waves, level-by-level from start node
- **DFS**: Follows paths deeply before backtracking

---

## 📁 Project Structure

```
Path-Visualizer/
├── index.html          # Main HTML file
├── style.css           # Styling and layout
├── script.js           # Main application logic
├── dijkstra.js         # Dijkstra's algorithm implementation
├── bfs.js              # Breadth-First Search implementation
├── dfs.js              # Depth-First Search implementation (if applicable)
├── grid.js             # Grid creation and management
├── maze.js             # Maze generation algorithm
├── animate.js          # Animation handling
├── interactions.js     # User input and event handling
└── README.md           # This file
```

---

## 💻 Technology Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure and layout |
| **CSS3** | Styling, animations, and responsiveness |
| **Vanilla JavaScript** | Algorithm implementation, DOM manipulation, event handling |
| **Canvas/DOM Grid** | Visual grid rendering |

---

## 🎓 What This Demonstrates

### Algorithm Knowledge
- ✅ Graph traversal algorithms
- ✅ Shortest path algorithms
- ✅ Algorithm complexity analysis
- ✅ Data structure usage (queues, stacks, priority queues)

### JavaScript Skills
- ✅ Event-driven programming
- ✅ Array and object manipulation
- ✅ Animation and timing control
- ✅ DOM manipulation and manipulation
- ✅ Modular code structure

### Software Engineering
- ✅ Clean, readable code
- ✅ Separation of concerns (algorithm, grid, animation, UI)
- ✅ Interactive user interface design
- ✅ Performance optimization

---

## 🎮 Interactive Features

### Draggable Nodes
- Click and drag the start node (green) to reposition
- Click and drag the end node (red) to find different paths
- Results update dynamically!

### Custom Obstacles
- Draw walls by clicking and dragging
- Clear walls individually or clear the entire board
- Test algorithms on different grid layouts

### Speed Control
- Slow down to understand step-by-step exploration
- Speed up to see the complete visualization quickly
- Perfect for analysis at any pace

---

## 🔬 Algorithm Explanations

### Dijkstra's Algorithm
**How it works:**
1. Starts from the source node
2. Marks neighbors with distances
3. Always expands the node with smallest distance
4. Guarantees shortest path for non-negative weights

**Time Complexity:** O((V+E) log V)  
**Space Complexity:** O(V)

**Best for:** Finding shortest paths in weighted graphs

### Breadth-First Search (BFS)
**How it works:**
1. Explores all nodes at distance k before nodes at k+1
2. Uses a queue (FIFO) to track nodes
3. Guarantees shortest path in unweighted graphs
4. Level-by-level exploration

**Time Complexity:** O(V+E)  
**Space Complexity:** O(V)

**Best for:** Unweighted shortest path, finding neighbors

### Depth-First Search (DFS)
**How it works:**
1. Explores as far as possible along each branch
2. Uses a stack (LIFO) to track nodes
3. Doesn't guarantee shortest path
4. Useful for topological sorting and connectivity

**Time Complexity:** O(V+E)  
**Space Complexity:** O(V)

**Best for:** Graph traversal, cycle detection

---

## 🎨 Visual Elements

| Color | Meaning |
|-------|---------|
| **Green** | Start node |
| **Red** | End/Target node |
| **Black** | Wall/Obstacle |
| **Blue** | Explored/Visiting |
| **Yellow** | In queue/Frontier |
| **Cyan** | Final shortest path |
| **White** | Unvisited |

---

## 📚 Learning Resources

- [Dijkstra's Algorithm Explained](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [BFS vs DFS](https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/)
- [Graph Algorithms](https://www.coursera.org/learn/algorithms-on-graphs)
- [Algorithm Visualization](https://visualgo.net/)

---

## 📄 License

This project is open source and available for educational and portfolio purposes.

---

## 👨‍💻 About

Built by **Avi** as a personal project to explore algorithm visualization and JavaScript mastery.

**Skills Demonstrated:**
- Data Structures & Algorithms
- JavaScript
- Interactive Web Applications
- UI/UX Design
- Problem-Solving
- Code Organization

---

**Happy Visualizing! 🎨** 
