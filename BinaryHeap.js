// Binary heap
class MaxBinaryHeap {
	constructor() {
		this.values = [55,39,41,18,27,12,33];
	}

	insert(element) {
      this.values.push(element);
      console.log(this.bubbleUp());
	}

	bubbleUp() {
		let idx = this.values.length - 1;
        while(true) {
        	if(idx === 0) break;
         	let parentIdx = Math.floor( (idx-1) / 2);
            if( this.values[parentIdx] < this.values[idx]) {

            	var temp = this.values[parentIdx];
            	this.values[parentIdx] = this.values[idx];
            	this.values[idx] = temp;
            	idx = parentIdx;
            }else {
            	return this.values;
            }	
        }
        return this.values;
	}

    extractMax() {
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
        if(this.values[childOne] > this.values[idx] && this.values[childTwo] > this.values[idx]){  
         swapIdx = this.values[childOne]>this.values[childTwo] ? childOne : childTwo;
        }else if(this.values[childOne] > this.values[idx] || this.values[childTwo] > this.values[idx]){
        // if one of the child is greater than the parentchild
        swapIdx = this.values[childOne] > this.values[idx] ? childOne : childTwo;
        }else{
        // if both the child are smaller than the parentchild
            return temp;
        }
        swap = this.values[swapIdx];
        this.values[swapIdx] = this.values[idx];
        this.values[idx] = swap;
        idx = swapIdx;

    }else if( childOne===this.values.length-1 ){
         if( this.values[childOne] > this.values[idx]){
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

let heap  = new MaxBinaryHeap();
console.log(heap.extractMax());
console.log(heap.values);
x   