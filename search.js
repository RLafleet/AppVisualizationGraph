import { getSimilar } from './searchSimilar.js';

function searchData() {
    const searchInput = document.getElementById('search-input').value;
    const similar = getSimilar(searchInput);

    console.log(`Similar for id ${searchInput}: ${similar}`);
}

document.getElementById('search-button').addEventListener('click', searchData);