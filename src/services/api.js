const API_URL = 'https://api.themoviedb.org/3/discover';
const TOKEN = '4a94a2cc-a2bb-44aa-9d4e-852e3ec4706f';

async function request(url) {
   const response = await fetch(`${API_URL + url}`)
   return await response.json();
}

async function getAllMovies(url) {
   return await request(url)
}

async function getMovieDetails(url) {
   return await request(url)
}

export {
   getAllMovies,
   getMovieDetails
}