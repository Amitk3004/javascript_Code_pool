/**
Problem Statement:

Count of Good Strings

You are given an array of strings S. Your task is to determine the total number of "good" strings present in this array.

A string T is considered a "good" string if and only if no character within the string appears more than (length of T /2) times.

Input:
An array of strings, S.

Output:
An integer representing the total count of "good" strings found in the input array S.

Example:
For the input array S = ['j', 'm', 'xiciw', 'uouok'], 
the output should be 2 i.e 'xiciw' and 'uouok'.
you just need to output the count which in this case is 2.
 */


function countGoodStrings(data) {

    let count = 0;

    data.forEach(element => {
        let track = {};
        let limit = Math.floor(element.length / 2);
        element.split('').forEach((e) => {

            if (track[e]) {
                track[e] += 1
            } else {
                track[e] = 1;
            }
        });
        const maxChar = Math.max(...Object.values(track))
        if (maxChar <= limit) {
            count++;
        }
        
    });
    return count;
}

console.log(countGoodStrings(['j', 'm', 'xiciw', 'uouok']));