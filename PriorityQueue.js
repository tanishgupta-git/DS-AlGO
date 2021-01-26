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

let ER = new PriorityQueue();
ER.enqueue("common gold",1);
ER.enqueue("gunshot",5);
ER.enqueue("high fever",2);
console.log(ER.values);
console.log(ER.dequeue());