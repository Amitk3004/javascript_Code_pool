let worker = new Worker('./worker.js');

worker.onmessage = (msg) => {

    console.log(msg.data);

};

worker.postMessage('sending data to worker');