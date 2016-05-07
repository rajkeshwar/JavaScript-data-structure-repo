
// binary search in JavaScript
function binarySearch(items, value){

    var startIndex  = 0,
        stopIndex   = items.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);
        
    while(items[middle] != value && startIndex < stopIndex){
    
        //adjust search area
        if (value < items[middle]){
            stopIndex = middle - 1;            
        } else if (value > items[middle]){
            startIndex = middle + 1;
        }
        
        //recalculate middle
        middle = Math.floor((stopIndex + startIndex)/2);    
    }

    //make sure it's the right value
    return (items[middle] != value) ? -1 : middle;
}

// Binary Search another implementation
function binarySearch2( data, value ){

    var mid;
    while( true ){
        mid = parseInt(data.length / 2, 10);

        if (value === data[mid]) {
            return data[mid];
        } else if(value > data[mid]){
            data = data.splice(mid);
        } else if(value < data[mid]){
            data = data.splice(0, mid);
        }
    }

    if (mid === 0) {
        if (value === data[0]) {
            return data[0];
        } 
        return null;
    }
}

