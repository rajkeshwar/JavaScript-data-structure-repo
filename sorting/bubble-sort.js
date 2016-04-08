// Bubble sort in JavaScript

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function bubbleSort(items){

    var len = items.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (items[j] > items[j+1]){
                swap(items, j, j+1);
            }
        }
    }

    return items;
}


// An alternative form of bubble sort can be accomplished by 
// going through the array in the reverse order, so the items 
// at the front of the array are placed in order first. To do 
// so, simply reverse the loops:

function bubbleSort(items){
    var len = items.length,
        i, j;

    for (i=len-1; i >= 0; i--){
        for (j=len-i; j >= 0; j--){
            if (items[j] < items[j-1]){
                swap(items, j, j-1);
            }
        }
    }

    return items;
}
