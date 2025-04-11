const button = document.querySelector('#button');

const handleSearch = throttle(() => {
    console.log('clicked');
}, 1500);

button.addEventListener('click', handleSearch);

function throttle(fn, time) {
    let inThrottle = false;
    return function(...args) {
        if (!inThrottle) {
            inThrottle = true;
            fn(...args)
            setTimeout(() => {
                inThrottle = false
            }, time);
        }
    }
};
