import api from "..";

const search = (postcode: string, places: string[]) =>
  api.post(`core/${postcode}/`, {
    places,
  });

const searchHistory = () =>
  api.post("core/postcodes/history/", {
    by: "search_date",
    count: 5,
  });

export { search, searchHistory };
