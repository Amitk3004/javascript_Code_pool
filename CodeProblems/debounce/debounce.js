const textbox = document.querySelector('#search');
const result = document.querySelector('#result');

textbox.addEventListener('keypress', handleSearch)

let timer = null;

function debounce (callback, time) {
    if(timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(callback, time);
};

function handleSearch (e) {
    if(textbox.value) {
        debounce(() => {
            result.textContent = textbox.value;
            console.log('value in the textbox - ', textbox.value);
        }, 300);
    } else {
        result.textContent = '';
    }
}