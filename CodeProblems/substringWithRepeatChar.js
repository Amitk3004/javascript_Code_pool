/* Largest substring with repeating character */


function repeat(str) {
  
  let max = 0;
  let count = 1;
  let size = str.length;
  
  for(let i=0; i<size; i++){
    if(str[i] === str[i-1]){
      count++;
    } else {
      max = Math.max(max, count);
      count = 1
    }
  }
  
  max = Math.max(max, count);
  
  return max;
  
}

console.log(repeat('aabbb')); // 3
console.log(repeat('aabbbdddd')); // 4