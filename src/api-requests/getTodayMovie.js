import { fetchFromTMDB } from "./fetchFromTMDB";

export const getTodayMovie = async (page = 1) => {
  return fetchFromTMDB("trending/movie/day", { page });
};
