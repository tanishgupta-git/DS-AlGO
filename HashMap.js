 // hash map
 class HashTable {
 	constructor(size=17) {
     this.keyMap = new Array(size);
 	}
// function for creating indexes from key
 	_hash(key) {
 		let total = 0;
 		let WEIRD_PRIME = 31;
 		for ( let i = 0 ; i < Math.min(key.length,100);i++) {
 			let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = ( total * WEIRD_PRIME  + value ) % this.keyMap.length;
 		}
 		return total;
 	}

 	set(key,value) {
 		let index = this._hash(key);
        if ( !this.keyMap[index] ) {
        	this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
 	}

 	get(key) {
     let index = this._hash(key);
     if(this.keyMap[index]) {
     for (let item of this.keyMap[index]) {
     	if(key === item[0]) {
     		return item[1];
     	}
     }

 }
     return undefined;      
 	}

// function for getting keys 
 	keys() {
 		var keysAll = [];
 		for (let item of  this.keyMap) {
 			if(item) {
 			for ( let keyItem of item) {
 				keysAll.push(keyItem[0]);
 			}

 		}
 		}
 		return keysAll;
 	}

// function for getting values
  
  values() {
  	var valuesAll = [];
  	 for (let item of  this.keyMap) {
 			if(item) {
 			for ( let keyItem of item) {
 			if(!(keyItem[1] in valuesAll)) { 
 				valuesAll.push(keyItem[1]);
 			}
 			}

 		}
 		}

 		return valuesAll;
  }

 } 

 let ht = new HashTable();
 ht.set("hello world","goodbye!!");
 console.log(ht.keyMap);
console.log(ht.keys());
console.log(ht.values());
