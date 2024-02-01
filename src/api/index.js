const url = "https://api.tvmaze.com";
import axios from "axios";

function getShows(query) {
  return axios.get(`${url}/search/shows?q=${query}`);
}

function getShow(id) {
  return axios.get(`${url}/shows/${id}`);
}
export { getShows, getShow };
