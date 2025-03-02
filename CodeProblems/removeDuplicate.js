/* Approach 1: using one line solution using spread operator and Set collection */

function removeDuplicate(arr) {
    return [...new Set(arr)];
}

/* Approach 2: Iterating over the array and adding every element into Set collection */

function removeDuplicateUsingSet(arr) {
    let set = new Set();

    arr.forEach(element => {
        set.add(element);
    });

    return [...set.values()];
}

/* Approach 3: Iterating over the array and adding pushing element to another array if it doesn't exist already */

function removeDuplicateUsingArray(arr) {
    let uniqueArray = [];

    arr.forEach(element => {
        if(!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });

    return uniqueArray;
}

/* Approach 4: Using Reducer to remove duplicate */

function removeUsingReducer(arr) {
    return arr.reduce((acc, curr) => {
        if (acc && acc.includes(curr)) {
            return acc;
        } else {
            return [...acc, curr];
        }
    }, []);
}


//driver statement

let arr = [2,5,4,2,7,7,1,8];

let uniqueArray1 = removeDuplicate(arr);
let uniqueArray2 = removeDuplicateUsingSet(arr);
let uniqueArray3 = removeDuplicateUsingArray(arr);
let uniqueArray4 = removeUsingReducer(arr);

console.log('Approach 1: -> ',uniqueArray1);
console.log('Approach 2: -> ',uniqueArray2);
console.log('Approach 3: -> ',uniqueArray3);
console.log('Approach 4: -> ',uniqueArray4);