const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = [1, 2, 3, 4, 5];
            // Simulate a successful request with the data as the result
            //   resolve(data);
            // Simulate a failed request with an error message
            reject("Error fetching data");
        }, 2000);
    });
};

fetchData()
    .then(data => {
        console.log("Data fetched:", data);
    })
    .catch(error => {
        console.log("Error fetching data:" + error);
    });