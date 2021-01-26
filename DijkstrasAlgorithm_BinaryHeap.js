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
      smallest = nodes.dequeue().val;
      if( smallest === finish) {

                     // we are done
                     // build up path to return at end 
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

graph.Dijkstra();

// Priority Queue
class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val,priority) {
      var newNode = new Node(val,priority);
      this.values.push(newNode);
      this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
    const element = this.values[idx];
        while(idx > 0) {
         	let parentIdx = Math.floor( (idx-1) / 2);
          let parent = this.values[parentIdx];
          if ( element.priority <= parent.priority) break;    	
            	this.values[parentIdx] = element;
            	this.values[idx] = parent;
            	idx = parentIdx;
        }

        return this.values;
	}

    dequeue() {
      if( this.values.length > 0) {
      let temp = this.values[0];
      this.values[0] = this.values[this.values.length - 1];
      this.values[this.values.length - 1] = temp;
      this.values.pop();
      var idx = 0;
      while(true) {
        let childOne = 2*idx+1;
        let childTwo = 2*idx+2;
        let swapIdx,swap;
        if( childOne <= this.values.length-1 && childTwo <= this.values.length-1) { 
        // if both the child are greater than the parent child
        if(this.values[childOne].priority > this.values[idx].priority && this.values[childTwo].priority > this.values[idx].priority){  
         swapIdx = this.values[childOne].priority>this.values[childTwo].priority ? childOne : childTwo;
        }else if(this.values[childOne].priority > this.values[idx].priority || this.values[childTwo].priority > this.values[idx].priority){
        // if one of the child is greater than the parentchild
        swapIdx = this.values[childOne].priority > this.values[idx].priority ? childOne : childTwo;
        }else{
        // if both the child are smaller than the parentchild
            return temp;
        }
        swap = this.values[swapIdx];
        this.values[swapIdx] = this.values[idx];
        this.values[idx] = swap;
        idx = swapIdx;

    }else if( childOne===this.values.length-1 ){
         if( this.values[childOne].priority > this.values[idx].priority){
           swap = this.values[childOne];
           this.values[childOne] = this.values[idx];
           this.values[idx] = swap;
         }
         return temp;
      }else{
         return temp;
      } 
    }
}
    }

}

class Node {
  constructor(val,priority) {
     this.val = val;
     this.priority = priority;
  }
}