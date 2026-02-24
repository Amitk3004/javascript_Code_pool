
function secondLargest(arr) {
    let largest = -Infinity;
    let s_largest = -Infinity;

    if (arr.length < 2) return 'min 2 number required'

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current > largest) {
            s_largest = largest;
            largest = current
        } else if (current > s_largest && current !== largest) {
            s_largest = current
        }
    }
    
    // Handle edge case: no second largest found
    if (s_largest === -Infinity) {
        return 'No second largest number found'
    }
    
    return s_largest;
}

console.log(secondLargest([-2, -21]));