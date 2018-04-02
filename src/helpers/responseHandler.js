const TMDB_IMAGE_BASE_URL = (width = 300) => `https://image.tmdb.org/t/p/w${width}`;

const handleResponse=function(response){
    const newMovies =response.data.results;
    const updatedMovies = newMovies.map(post => {
    return {
        ...post,
        backdrop_path: `${TMDB_IMAGE_BASE_URL(300)}${post.backdrop_path}`,
        poster_path: `${TMDB_IMAGE_BASE_URL(300)}${post.poster_path}`,
    }
   });
  return updatedMovies;
}

export default handleResponse;