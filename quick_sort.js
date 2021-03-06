function quickSort(arr, left, right){
   var len = arr.length
   pivot
   partitionIndex
   
   if(left < right){
      pivot = right;
      partitionIndex = partition(arr, pivot, left, right);
      
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
   }
   return arr;
}      

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;
   for(var i = left; i < right; i++){
      if(arr[i] < pivotValue){
         swap(arr, i, partitionIndex);
         partitionIndex++;
      }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
}

function swap(arr, i, j){
   var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

 // testing whether the return arr[] does anything when recursed    
/*
    function x(y){
    let arr = [y,2,3,4]
    return arr
 }
 
 function y(z){
    let arr = [z,9,8,7,6]
    x(5)
    return arr
 }*/
