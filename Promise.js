// Example 1: Creating a Promise that resolves after a delay

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved after ' + ms + ' milliseconds');
        }, ms);
    });
}

console.log('Start');

delay(2000)
    .then((result) => {
        console.log(result);
        return delay(1000);
    })
    .then((result) => {
        console.log(result);
        return delay(1500);
    })
    .then((result) => {
        console.log(result);
        console.log('All promises resolved');
    });

// Output:
// Start
// [waits for 2 seconds]
// Promise resolved after 2000 milliseconds
// [waits for 1 second]
// Promise resolved after 1000 milliseconds
// [waits for 1.5 seconds]
// Promise resolved after 1500 milliseconds
// All promises resolved