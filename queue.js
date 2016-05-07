// Queue with Array in JavaScript 

/**
* @param {Array=} optElements
* @constructor
*/
function Queue( optElements ){
	if (optElements instanceOf Array) {
		this.items = optElements;
	} else {
		this.items = [];
	}

	this.length = this.items.length;
}

/**
* @param {*} item
*/
Queue.prototype.enqueue = function( item ){
 	this.length += 1;
 	return this.items.push(item);
}

/**
* return {*}
*/
Queue.prototype.dequeue = function(){
	if (this.length > 0) {
		this.length -= 1;
	} 
	return this.items.shift();
}