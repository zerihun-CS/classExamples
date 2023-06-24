function getMovie() {
    fetch('https://imdb-api.com/en/API/BoxOffice/k_fvt0no7l')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.items.length; i++) {
                console.log(data.items[i].title)
            }
        }).catch((error) => {
            console.log('Error:', error);
        });
}

getMovie()