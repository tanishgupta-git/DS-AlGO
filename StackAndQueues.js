// code for implementing stacks
class Node {
constructor(val){
	this.val = val;
	this.next = null;
}
}

 class Stack{
 	constructor(){
 		this.first = null;
 		this.last = null;
 		this.length = 0;
 		 
 		 }

 		push(val){
        var newNode = new Node(val);
		if( !this.first){
			this.first = newNode;
			this.last = newNode;
		}else{
        newNode.next = this.first;
        this.first = newNode;
		}
        this.length++;
        return this.length;
 		}

 		pop(){
 		if(!this.first) return null;
		var current = this.first;
		this.first = current.next;
		this.length--;
		if(this.length === 0) this.last = null;
		return current.val;
 		}

 }

// code for implementing queues
class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;

	}

	enqueue(val){
		var newNode = new Node(val);
		if(!this.first){
			this.first = newNode;
			this.last = newNode;
		}else{
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this.size;
	}

	dequeue(){
		if(!this.first) return null;
		var current = this.first;
		this.first = current.next;
		this.size--;
		if(this.size === 0) this.last = null;
		return current.val;
	}
}

var newDeque = new Queue();
console.log(newDeque.enqueue(5));
console.log(newDeque.enqueue("hii"));
console.log(newDeque.dequeue());
