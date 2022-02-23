setTimeout(() => {
    console.log("Sourav");
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);

const fetchData = (myFunction) => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("callback my function"); }, 1000);
    })
    // myFunction("hello");
    return myPromise;
};


