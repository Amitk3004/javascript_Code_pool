Array.prototype.myFilter = function(fn) {
    const list = [];
    for (let item of this) {
        if (fn(item)) {
            list.push(item);
        } else {
            continue;
        }
    }
    return list;
}


Array.prototype.myMap = function(fn) {
    const list = [];
    for (let item of this) {
        list.push(fn(item));
    }
    return list;
}

Array.prototype.myReduce = function(fn, acc) {
    for (let item of this) {
        acc = fn(acc, item)
    }
    return acc;
}


Array.prototype.myfind = function(fn) {
    let final = null;
    for (let item of this) {
        if(fn(item)){
            final = item;
            break;
        }
    }
    return final;
}




let a = [2,2,4,4,87,6,4,8,1]

console.log(a.myfind(a => a === 87));

// remove duplicate using reduce
let n = a.myReduce((acc, curr) => {
    if (!acc.includes(curr)) {
        return [...acc, curr]
    } else {

        return acc
    }
}, [])
// console.log(n)
// console.log(a.myReduce((a,b) => {return a+b}, 0));

