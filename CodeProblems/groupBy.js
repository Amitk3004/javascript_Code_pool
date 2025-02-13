/* create groups from an array of object based on a key */

/* examples */

/**
 * input - [{name: 'sam', type: 'admin'},{name: 'joe', type: 'user'},{name: 'sam', age: 40},{name: 'albert', type: 'admin'}];
 * key = name;
 * outup - [sam: [{name: 'sam', type: 'admin'}, {name: 'sam', age: 40}], joe: [{name: 'joe', type: 'user'}], albert: {name: 'albert', type: 'admin'}]
 */

const mockData = [{ name: 'sam', type: 'admin' }, { name: 'joe', type: 'user' }, { name: 'sam', age: 40 }, { name: 'albert', type: 'admin' }];

function groupBy(arr, key) {

  return arr.reduce((group, o) => {

    if(group[o[key]]) {
      group[o[key]] = [...group[o[key]], o]
    } else{
      group[o[key]] = [o]
    }
    return group;

  }, {});

}

console.log(groupBy(mockData, 'name'))