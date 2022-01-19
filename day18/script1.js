const countriesAPI = 'https://restcountries.com/v2/all';

//Read the countries API using fetch and print the name of country, capital, languages, population and area.
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));



