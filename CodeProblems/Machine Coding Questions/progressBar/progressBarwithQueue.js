let container = document.querySelector('.bar-container');
let button = document.querySelector('.btn')
let queueText = document.querySelector('.queueText')
let runningText = document.querySelector('.runningText')
let refreshBtn = document.querySelector('.refresh')


refreshBtn.addEventListener('click', handleRefresh);
button.addEventListener('click', handleClick);

let maxProcessCount = 3
let currentProcess = 0;
let watingQueue = [];


function handleRefresh() {
    container.innerHTML = '';
}



function handleClick() {
    /* Creating progress bar */
    let outer = document.createElement("div");
    outer.classList.add('outer');
    let inner = document.createElement("div");
    inner.classList.add('inner');
    outer.appendChild(inner);

    /* Adding eventlistner to add another progressbar waiting into queue. */
    inner.addEventListener('animationend', () => {
        currentProcess -= 1;
        runningText.textContent = `Running task: ${currentProcess}`;
        if (watingQueue.length > 0) {
            container.appendChild(watingQueue[0]);
            watingQueue.shift();
            queueText.textContent = `Waiting task: ${watingQueue.length}`;
            currentProcess +=1;
            runningText.textContent = `Running task: ${currentProcess}`;
        }
    });

    /* check if current task is less than max then add into Document else push to queue*/
    if (currentProcess < maxProcessCount) {
        container.appendChild(outer);
        currentProcess += 1;
        runningText.textContent = `Running task: ${currentProcess}`
    } else {
        watingQueue.unshift(outer);
        queueText.textContent = `Waiting task: ${watingQueue.length}`
    }
}
