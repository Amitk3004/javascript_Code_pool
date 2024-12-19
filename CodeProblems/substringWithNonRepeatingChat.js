function repeat(str) {
  
  let max = 0;
  let size = str.length;
  let map = new Map();
  
  for(let i=0; i<size; i++){
    if(map.has(str[i])){
      max = Math.max(max, map.size);
      map.clear();
      map.set(str[i], 1);
    } else {
      map.set(str[i], 1);
    }
  }
  
  max = Math.max(max, map.size);
  
  return max;
  
}

console.log(repeat('abcabcbb')); // 3
console.log(repeat('bbbbb')); // 1
console.log(repeat('pwwkew')); // 3 wke
console.log(repeat('abb')); // 2