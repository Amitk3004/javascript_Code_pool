/* update a charcter in a string on specific index */

function change(str, char, index) {

    let nStr = ''

    for (i in str) {

        if (i == index) {
            nStr += char
        } else {
            nStr += str[i];

        }
    }
    return nStr;

}


let userName = 'javascript'
console.log(change(userName, 'k', 5));