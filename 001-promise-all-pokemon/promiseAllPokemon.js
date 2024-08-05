// promiseAllPokemon.js

async function fetchData(url) {
    const fetch = await import('node-fetch').then(module => module.default);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

const url1 = 'https://pokeapi.co/api/v2/pokemon/1'; // Bulbasaur
const url2 = 'https://pokeapi.co/api/v2/pokemon/4'; // Charmander

async function fetchDataInParallel() {
    try {
        const [data1, data2] = await Promise.all([fetchData(url1), fetchData(url2)]);
        console.log('Data from URL1 (Bulbasaur):', data1);
        console.log('Data from URL2 (Charmander):', data2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDataInParallel();
