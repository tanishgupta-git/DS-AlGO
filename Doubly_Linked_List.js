// code for doubly linked list
 
// creating the node class 
class Node {
	constructor(val){
		this.prev = null;
		this.val = val;
		this.next = null;
	}
}

class DoublyList {
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = newNode;
		}else{
			newNode.prev = this.tail;
			this.tail.next =  newNode;
			this.tail = newNode;

		}
		this.length++;
		return this;
	}

	pop(){
		if(!this.head) return undefined;
		if(this.head === this.tail){
             this.head = null;
             this.tail = null;
		}else{
		var deletedNode = this.tail;
    this.tail = deletedNode.prev;
    deletedNode.prev.next = null;
		deletedNode.prev = null;
	}

		this.length--;
		return deletedNode;
	}
    
    shift(){
    	if(!this.head) return undefined;
        var current = this.head;
    	if(this.head === this.tail){
    		     this.head = null;
             this.tail = null;
    	}else{

    	this.head = current.next;
    	current.next = null;
      this.head.prev = null;
        }
    	this.length--;
    	return current;
    }

    unshift(val){
    		var newNode = new Node(val);    
    	if(!this.head) {
   	        this.head = newNode;
			this.tail = newNode;
    	}else{
    		this.head.prev = newNode;
    		newNode.next = this.head;
    		this.head = newNode;
    	}
    	this.length++;
    	return this;
    }

    get(pos){

    	if( pos < 0 || pos >= this.length ) return null;
    	var current,currentPos;
    	if( pos <= this.length/2){ 
    	current = this.head;
    	currentPos = 0;
    	while(currentPos !== pos ){
          current = current.next;
          currentPos++;
		}

	}else{
       current = this.tail;
       currentPos = this.length - 1;
       	while(currentPos !== pos ){
          current = current.prev;
          currentPos--;
		}
	}
		return current;
    }


    set(pos,value){
        var foundNode = this.get(pos);
      if(foundNode){
      foundNode.val = value;
      return true;               	
      }

      return false;
    }

    insert(pos,value){
    if(pos<0 || pos>this.length) return false;
		if(pos === 0) return !!this.unshift(value);
		if(pos === this.length) return !!this.push(value);
	  var nextNode = this.get(pos);
		var newNode = new Node(value);
		newNode.next = nextNode;
		newNode.prev = nextNode.prev;
		nextNode.prev.next = newNode;
		nextNode.prev = newNode;
		this.length++;
		return true;
    }


    remove(pos){
		if(pos<0 || pos>=this.length) return undefined;
		if(pos === 0) return this.shift();
		if(pos === this.length-1) return this.pop();
		var deletedNode = this.get(pos);
		deletedNode.prev.next = deletedNode.next;
		deletedNode.next.prev = deletedNode.prev;
		deletedNode.prev = null;
		deletedNode.next = null;
		this.length--;
		return deletedNode;
    }


    reverse(){
    	var temp = this.head;
    	this.head = this.tail;
    	this.tail = temp;
    	var current = temp;
    	var next;
    	while(current){
    	   next = current.next;
         current.next = current.prev;
         current.prev = next;
         current = next;
    	}
    	return this;
    }



  	print(){
		var arr = [];
		var current = this.head;
		while(current){
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}


}

var list = new DoublyList();
list.push(1);
list.push(5);
list.push(3);
console.log(list.pop());
list.print();
list.shift();
console.log(list.shift().val);
list.print();