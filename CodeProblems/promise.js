// promise example 




// p.then(res => console.log(res)).catch(error => console.log(error));
async function print() {
    const p = new Promise((res, rej) => {
        if(true) {
            rej(1);
        };
    });
    
    const p2 = Promise.reject(2);
    const p3 = Promise.resolve(3);

    try{
        const allResponse = await Promise.all([p, p2, p3]);
        console.log(allResponse);

    } catch(error) {
        console.log(error);
    }

    try{
        const allResponse = await Promise.allSettled([p, p2, p3]);
        console.log(allResponse);

    } catch(error) {
        console.log(error);
    }

    try{
        const allResponse = await Promise.race([p, p2, p3]);
        console.log(allResponse);

    } catch(error) {
        console.log(error);
    }

    try{
        const allResponse = await Promise.any([p, p2, p3]);
        console.log(allResponse);

    } catch(error) {
        console.log(error);
    }

}

print();
