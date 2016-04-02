

function LinkedList(){
	this.head = null;
}

LinkedList.prototype.add = function(value){
	var node = {
		value: value,
		next:null
	};

	var current;

	if (this.head === null) {
		this.head = node;
	} else {
		current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = node;
	}
	return node;
}

LinkedList.prototype.remove = function(node){
	var current, value = node.value;
	if (this.head !== null) {
		if (this.head === node) {
			this.head = this.head.next;
			node.next = null;
			return value;
		}
		current = this.head;
		while(current.next){
			if (current.next === node) {
				current.next = node.next;
				return value;
			}
			current = current.next;
		}
	}
}