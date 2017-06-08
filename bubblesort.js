//function bubbleSort(arr){
//    var pointer=0;
//    var swapCounter=0;
//    var swapper = 1;
//    if (!arr.length) return [];
//   while (swapper>0) {
//   for (i=0;i<arr.length-1;i++){
//   	     swapper=0;
//        if (arr[i] > arr[i+1]){
//        	pointer=arr[i+1] ;
//        	arr[i+1] =arr[i];
//        	arr[i] = pointer;
//        	swapCounter++;
//        	swapper++;
//		} 
//   }
// }
//   return arr;
//}

function bubbleSort(arr) {
	var swapper = 1;
	if (!arr.length) return [];
	while(swapper > 0) {
		swapper = 0;
		for (i = 0; i <arr.length; i++) {
			if(arr[i] > arr[i+1]) {
				swapper++;
				arr = swap(i, i+1, arr);
			}
		}
	}
	return arr;
}

function swap (index1, index2, arr) {
	var pointer = arr[index2];
	arr[index2] = arr[index1];
	arr[index1] = pointer;
	return arr;
}