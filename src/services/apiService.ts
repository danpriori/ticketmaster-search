import axios from "axios";

// let proxy = 'https://cors-anywhere.herokuapp.com/';
// let proxy = 'https://crossorigin.me/';
// let proxy = "https://api.codetabs.com/v1/proxy?quest=";
let proxy: string = "";
const apikey: string = "0JIWxBrWrDwCSXZzhD9HKwPngGfGc9fq";
const countryCode: string = "FI";

export function getGenreList() {
  const classificationDefault = "KZFzniwnSyZfZ7v7nJ";

  return axios.get(
    proxy +
      "https://app.ticketmaster.com/discovery/v2/classifications/" +
      classificationDefault +
      "/?apikey=" +
      apikey
  );
}

export function getEventList(search: string, genreId: string, page: number) {
  let searchInput: string = "";
  if (search !== "") {
    searchInput = "keyword=" + search + "&";
  }
  return axios.get(
    proxy +
      "https://app.ticketmaster.com/discovery/v2/events.json?" +
      searchInput +
      "countryCode=" +
      countryCode +
      "&classificationId=" +
      genreId +
      "&page=" +
      page +
      "&apikey=" +
      apikey
  );
}

export function getEventDetails(search: string) {
  return axios.get(
    proxy +
      "https://app.ticketmaster.com/discovery/v2/events/" +
      search +
      "/?apikey=" +
      apikey
  );
}
