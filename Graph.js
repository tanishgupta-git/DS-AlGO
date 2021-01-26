// class to implement graph
//  for now we are building undirected graph
class Graph {
	constructor() {
		this.adjacencyList = {} 
	}

	addVertex(vertex) {
		if(this.adjacencyList[vertex]) return;
        this.adjacencyList[vertex] = []
	}

	addEdge(vertex1,vertex2) {
           this.adjacencyList[vertex1].push(vertex2);
           this.adjacencyList[vertex2].push(vertex1);
	}
	removeEdge(vertex1,vertex2) {
		this.adjacencyList[vertex1]= this.adjacencyList[vertex1].filter( item => item !== vertex2);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( item => item !== vertex1);
	}
	removeVertex(vertex) {
		for ( item of this.adjacencyList[vertex]) {
		 this.removeEdge(item,vertex);
		}
		// delete this property on adjacencylist object
		delete this.adjacencyList[vertex];
	}
       
    dfsRecursive(vertex) {
      var visitedList = {};
      this.dfsHelper(vertex,visitedList);
      console.log(visitedList);
    }
    dfsHelper(vertex,visitedList) {
         if  (!vertex) return null;

         visitedList[vertex] = true;
         this.adjacencyList[vertex].forEach( v => {
         	if(!visitedList[v]) {
         		return this.dfsHelper(v,visitedList);
         	} 
         })
    }

    dfsIterative(vertex) {
        let S = [];
        let visitedList = {};
        let result = [];
        S.push(vertex);
        while(S.length) {
           let v = S.pop();
           if (!visitedList[v]) {
           	visitedList[v] = true;
           	result.push(v);
           	for ( let nebNode of this.adjacencyList[v]) {
           		S.push(nebNode);
           	}
           }
        }
      console.log(result);
    }
   
   bfsIterative(vertex) {
   	let Q = [];
   	let visitedList = {};
   	let result = [];
   	Q.push(vertex);
   	while (Q.length) {
   		let v = Q.shift();
   		if(!visitedList[v]) {
   			visitedList[v] = true;
   			result.push(v);
            for (let nebNode of this.adjacencyList[v]) {
            	Q.push(nebNode);
            }
   		}
   	}

   	console.log(result);
   }
}
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("F","E");
g.addEdge("D","F");
console.log(g.adjacencyList);
g.dfsRecursive("A");
g.dfsIterative("A");
g.bfsIterative("A");