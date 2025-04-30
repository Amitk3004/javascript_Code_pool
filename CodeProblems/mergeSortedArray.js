function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let updated = [];
   while(i < arr1.length && j < arr2.length ) {

     if (arr1[i] < arr2[j]) {
        updated.push(arr1[i]);
        i++;
     } else if (arr1[i] > arr2[j]) {
        updated.push(arr2[j]);
        j++;
     } else {
        updated.push(arr1[i]);
        i++;
        j++;
     }

   }

   if (i === arr1.length && j === arr2.length) {
       return updated;
   }

   if (i === arr1.length) {
      return [...updated, ...arr2.slice(j)]; 
   }
   if (j === arr2.length) {
      return [...updated, ...arr1.slice(i)];
   }

//    return updated;

}

const newArr = merge([1,2,3,55], [22,23,44]);
console.log(newArr);