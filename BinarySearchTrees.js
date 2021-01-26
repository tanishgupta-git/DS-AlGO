// code for binary search tree
class Node {
	constructor(value){
      this.value = value;
      this.left=  null;
      this.right = null;
	}
}
class BinarySearchTree {
	constructor(){
		this.root = null;
	}

	insert(value) {
		var newNode = new Node(value);
		if(!this.root) {
			this.root = newNode;
		}else{

			var current = this.root;

			while(true) {
				if( value === current.value) return undefined;
				if(value < current.value) {
					if( current.left == null){
						current.left = newNode;
						return this;
					}
					current = current.left;
				}else if( value > current.value){
					if(current.right == null){
						current.right = newNode;
						return this;
					}
			        current = current.right;
				}
			}
		}

	 }

	 search(value){
	 	if(!this.root) return null;
	 	var current = this.root;
        var nodePosition = "at root";
	 	while(true) {

	 		if(current.value === value){
	 			return nodePosition;
	 		}else if(current.value < value){
	 			if(current.right){
	 				current = current.right;
	 				nodePosition = nodePosition + " to the right";
	 			}else{
	 				return "not found";
	 			}
	 		}else{
	 			if(current.left){
	 				current = current.left;
	 				nodePosition = nodePosition + " to the left";
	 			}else{
	 				return "not found";
	 			}
	 		}
	 	}
	 }

   BFS(){

    	 var treeQueue = [] ,visitedNode=[];
    	 if(!this.root) return undefined;
    	 treeQueue.push(this.root);
    	 while(treeQueue.length) {

    	   var dequeudNode = treeQueue.shift(); 
           visitedNode.push(dequeudNode.value);
           if(dequeudNode.left) {
           	treeQueue.push(dequeudNode.left);
           }
           if(dequeudNode.right){
           	treeQueue.push(dequeudNode.right);
           }
    	 }

    	 console.log(visitedNode);
    }
    
    DFSPreorder(){
    	var visitedNode = [];
    	if(!this.root) return undefined;
        function helperPreorder(node) {
        
        visitedNode.push(node.value);    
        if(node.left){
    		helperPreorder(node.left);
    	}
    	if(node.right){
    		helperPreorder(node.right);
    	}

    }
    	var current = this.root;
    	helperPreorder(current);
    	console.log(visitedNode);
    }

    DFSPostorder(){
    	var visitedNode = [];
    	if(!this.root) return undefined;
        function helperPostorder(node) {
         
        if(node.left){
    		helperPostorder(node.left);
    	}
    	if(node.right){
    		helperPostorder(node.right);
    	}
        visitedNode.push(node.value);   
    }
    	var current = this.root;
    	helperPostorder(current);
    	console.log(visitedNode);
    }

    DFSInorder(){
    	var visitedNode = [];
    	if(!this.root) return undefined;
        function helperInorder(node) {
         
        if(node.left){
    		helperInorder(node.left);
    	}
    	visitedNode.push(node.value);   
    	if(node.right){
    		helperInorder(node.right);
    	}
    }
    	var current = this.root;
    	helperInorder(current);
    	console.log(visitedNode);
    }


	 print(){
	 	console.log(this);
	 }
}
var myBst =  new BinarySearchTree();
myBst.insert(4);
myBst.print();
myBst.insert(8);
myBst.insert(2);
myBst.BFS();
myBst.DFSInorder();
myBst.DFSPreorder();
myBst.DFSPostorder();