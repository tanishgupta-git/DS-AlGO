// dijkstras algorithm
// priority queue
class PriorityQueue  {
	constructor() {
		this.values = [];
	}
	enqueue(val,priority) {
       this.values.push({val,priority});
       this.sort();

	}
	dequeue() {
		return this.values.shift();
	}	 
	sort() {
		this.values.sort( (a,b) => a.priority - b.priority );
	};
}

// weighted graph
class WeightedGraph {
	constructor() {
		this.adjancyList = {};
	}
	addVertex(vertex) {
       if(!this.adjancyList[vertex]) this.adjancyList[vertex] = [];
	}
	addEdge(vertex1,vertex2,weight) {
		this.adjancyList[vertex1].push({node:vertex2,weight});
		this.adjancyList[vertex2].push({node:vertex1,weight});
	}
	Dijkstra(start,finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let smallest;
        let path = [];
		// build up initial state
		for ( let vertex in this.adjancyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex,0);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(vertex,Infinity);	
			}
			previous[vertex] = null;
		}
		// as long as there something to visit
		while(nodes.values.length) {
			console.log(nodes);
			smallest = nodes.dequeue().val;
			if( smallest === finish) {
                     // we are done build up path to return at end 
                     while(previous[smallest]) {
                     	path.push(smallest);
                     	smallest = previous[smallest];
                     }
                     break;
			}
			if( smallest || distances[smallest] !== Infinity){
				for ( let neighbor in this.adjancyList[smallest] ) {
				  // find neighboring node
				  let nextNode = this.adjancyList[smallest][neighbor];
                 // calculate the distance
                 let candidate = distances[smallest] + nextNode.weight;
                 if( candidate < distances[nextNode.node] ) {
                 	// updating new smallest distance to neighbor
                 	distances[nextNode.node] = candidate;
                 	// updating previous - how we go to neighbor
                 	previous[nextNode.node] = smallest;
                 // enqueue in priority queue with new priority
                 nodes.enqueue(nextNode.node,candidate);
                 }

				}
			}
         
		}
       return path.concat(smallest).reverse();
	}
}

var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B",4);
graph.addEdge("A","C",2);
graph.addEdge("B","E",3);
graph.addEdge("C","D",2);
graph.addEdge("C","F",4);
graph.addEdge("D","E",3);
graph.addEdge("D","F",1);
graph.addEdge("E","F",1);

console.log(graph.Dijkstra("A","E"));