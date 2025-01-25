const button = document.querySelector('#button');
// const result = document.querySelector('#result');

button.addEventListener('click', handleSearch);

let timer = null;

function throttle(callback, time) {
    if (timer) {
        return;
    }
    timer = setTimeout(() => {
        callback();
        timer = null;
    }, time);


}


function handleSearch() {
    throttle(() => {
        console.log('clicked');
    }, 1500);
}
