 // newNode for singly linked list 
class Node {
	constructor(val){
       this.val = val;
       this.next = null;
	}
}

// code for creating singly linked list
class SinglyList {
	// constructor for singly linked list
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

			this.tail.next = newNode;
			this.tail = newNode;

		}

		this.length++;
		return this;
	}

	pop(){
	   if(!this.head) return undefined;
     
       var current = this.head;
       var newTail = current;
       while( current.next) {
          newTail = current;
          current = current.next;
       }
       this.tail = newTail;
       newTail.next = null;
       this.length--;
       if(this.length === 0) { this.tail = null; this.head = null}
       return current;
	}
	
	shift(){

		if(!this.head) return undefined;
		var current = this.head;
		this.head = this.head.next;
		this.length--;
		if(this.length === 0) this.tail = null;
		// we are doing current null because , we don't want that anyone can access the head from this
		current.next = null;
		return current;

	}

	unshift(val){

		var newNode = new Node(val);
		if( !this.head){
			this.head = newNode;
			this.tail = newNode;
		}else{
        newNode.next = this.head;
        this.head = newNode;
		}
        this.length++;
        return this;
	}

	get(pos){
		var current= this.head;
		if(pos < 0 || pos >= this.length) return null;
		var currentPos = 0;
		while(currentPos !== pos ){
          current = current.next;
          currentPos++;
		}

		return current;
	}


	set(pos,value){
      var foundNode = get(pos);
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
		var newNode = new Node(value);
		var prev = this.get(pos-1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
	}


	remove(pos){
		if(pos<0 || pos>=this.length) return undefined;
		if(pos === 0) return this.shift();
		if(pos === this.length-1) return this.pop();
		var prev = this.get(pos-1);
		var deleted = prev.next;
		prev.next = deleted.next;	
		this.length--;
		return deleted;
	}

	reverse(){
		var temp = this.head;
		this.head = this.tail;
		this.tail = temp;
        var current = temp;
		var next,prev=null;

	    while(current){    	
        next = current.next;
		current.next = prev;
		prev = current;
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

var list = new SinglyList();
list.push(1);
list.push("hii");
list.push("78");
list.print();
list.reverse();
list.print();
list.shift();
list.print();