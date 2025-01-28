const textbox = document.querySelector('#search');
const result = document.querySelector('#result');

textbox.addEventListener('keyup', handleSearch)

/* debounce with closure implementation,   */
function debounce (fn, wait) {
    let time;
    return function(...arg) {
        clearTimeout(time);
        time = setTimeout(() => {fn(...arg)}, wait);
    }
}

const handle = debounce((text) => {result.textContent = text}, 500);


function handleSearch() {
    handle(textbox.value);
}