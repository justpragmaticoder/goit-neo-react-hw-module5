import { fetchFromTMDB } from "./fetchFromTMDB";

export const fetchMovieByName = async (searchStr, page = 1) => {
  return fetchFromTMDB("search/movie", {
    query: searchStr,
    include_adult: false,
    page,
  });
};
