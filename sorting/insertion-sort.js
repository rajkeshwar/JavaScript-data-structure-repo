// Insertion sort in JavaScript
var items = [77, 33, 44, 11, 88, 22, 66, 55];

function insertionSort( items ){

	var len = items.length,
		i, j, value;

	for (i = 1; i < len; i++) {
		value = items[i];

		for (j = i-1; items[j] > value; j--) {
			items[j+1] = items[j];
		}
		items[j+1] = value;
	}

	return items;
}


// Psuedo code
for i = 1 to length(A)
    x = A[i]
    j = i - 1
    while j >= 0 and A[j] > x
        A[j+1] = A[j]
        j = j - 1
    end while
    A[j+1] = x[3]
end for


// Algorithm
INSERTION(A, N)
This algorithm sorts the array A with N elements

1. Set A[0] := [Initializes sentinel element]
2. Repeat steps 3 to 5 for K = 2, 3, ... N
3. 	 Set TEMP := A[K] and PTR := K - 1
4. 	 Repeat while TEMP < A[PTR]
 		(a) Set A[PTR + 1] := A[PTR]. [Moves element forward]
 		(b) Set PTR := PTR - 1 
 	 [End of loop]
5. 	 Set A[PTR+1] := TEMP. [Inserts element in proper place]
   [End of step 2 loop]
6. Return.

