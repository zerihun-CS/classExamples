// Example 2: Creating a Promise that resolves or rejects based on a condition

function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number') {
            resolve('Valid number: ' + number);
        } else {
            reject('Invalid number');
        }
    });
}

checkNumber(42)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log('Error:', error);
    });



// Output:
// Valid number: 42
// Error: Invalid number