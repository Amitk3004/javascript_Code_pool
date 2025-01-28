
/* List of char to ignore while counting */
const discard = [' ', ','];


/* implementaion of logic */

function countCharInString(str) {
    let charData = {};

    for(char of str) {
        if(discard.includes(char)) continue; 
        if(char in charData) {
            charData[char] += 1;
        } else {
            charData[char] = 1;
        }
    }
    return charData;
}


/* Another approach to get this can be using Map collection */

function countCharUsingMap(str) {
    let map = new Map();

    for(char of str) {
        if(discard.includes(char)) continue;
        if(map.has(char)){
            map.set(char, map.get(char)+1);
        }else {
            map.set(char, 1);
        }
    }

    return Object.fromEntries(map);
}








/* driver code */

let message = 'Hello user, welcome to the learning zone';

const response = countCharInString(message);
const responseFromMap = countCharUsingMap(message);

console.log('using object -> ', response);
console.log('using map collection -> ', responseFromMap);