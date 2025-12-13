// Min from the array
function min(arr) {
    if (arr.length === 0) return null;
    let min = arr[0];
    for(let i=0; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Max from the array
function max(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for(let i = 0; i<arr.length; i++) {
    if (arr[i]>max) {
        max = arr[i];
    }
  }
  return max;
}


// using array reducer and chaining 
function find(arr){
    if (arr.length === 0) return {min: null, max: null};
    return arr.reduce((acc, curr) => {
        let obj = {...acc};
        if (curr > acc.max) {
            obj.max = curr
        };
        if (curr < acc.min) {
            obj.min = curr;
        }
        return obj;
    }, {min: arr[0], max: arr[0]})
}



//driver functions 
const arr = [9,4,12,7,4,5,-2,-3,55];

console.log(min(arr));
console.log(max(arr));
console.log(find(arr).min);
console.log(find(arr).max);



