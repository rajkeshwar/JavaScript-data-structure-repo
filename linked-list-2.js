
var LinkedList = function(){
	this.head = null;
	this.tail = null;

	var Node = function(value){
		this.next = null;
		this.value = value
	};

	this.add = function(value){
		// No head create one
		if (this.head === null) {
			this.head = new Node(value);
			return this.head;
		}
		// No tail create one
		if (this.tail === null) {
			this.tail = new Node(value);
			this.head.next = this.tail;
			return this.tail;
		}

		this.tail.next = new Node(value);
		this.tail = this.tail.next;
		this.tail.next = null;
		return this.tail;
	}
}



LinkedList.prototype.length = function(){

	var len = 0, 
		current = this.head;

	while(current !== null){
		len += 1;
		current = current.next;
	}

	return len;
}