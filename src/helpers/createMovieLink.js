import axios from 'axios';

const MOVIE_DB_API_KEY='3c310756181ea5e6058488ce2d5f3591';
const relativeMovieDBUrl='/movie/top_rated';

const createMovieLink = (queryParams) => {
  let baseUrl = `${axios.defaults.baseURL}${relativeMovieDBUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams)
      .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
  }
  return baseUrl;
}

export default createMovieLink;