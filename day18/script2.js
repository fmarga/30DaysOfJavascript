const catsAPI = 'https://api.thecatapi.com/v1/breeds';

//Print out all the cat names in to catNames variable.
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const catNames = data;
        console.log(catNames);
    })
    .catch(error => console.error(error));