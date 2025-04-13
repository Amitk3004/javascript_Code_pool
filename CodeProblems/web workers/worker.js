onmessage = (msg) => {
    console.log('inside worker', msg); 
}

postMessage('Hello from worker');