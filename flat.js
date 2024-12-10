
function flat(arr){
  // creating a new array to hold values
  const update = [];

  // logic to flat a nested array using recursion
  arr.forEach((e) => {
    if(Array.isArray(e)){
      update.push(...flat(e));
    } else {
      update.push(e);
    }
  });
  
  // return final array 
  return update;
}

// driver function
let nestedArray = [1,2,[3,4],[5,6,[7,8]]];
const finalArray = flat(nestedArray);
console.log(finalArray);
