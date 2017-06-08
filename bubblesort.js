function bubbleSort(arr){
    var pointer=0;
    var swapCounter=0;
    var swapper = 1;
    if (!arr.length) return [];
   while (swapper>0) {
   for (i=0;i<arr.length-1;i++){
   	     swapper=0;
        if (arr[i] > arr[i+1]){
        	pointer=arr[i+1] ;
        	arr[i+1] =arr[i];
        	arr[i] = pointer;
        	swapCounter++;
        	swapper++;
		} 
   }
 }
   return arr;
}

//function swap(a,b) {/
//    if (b>a) return (a,);
//    	else  return a;
//}