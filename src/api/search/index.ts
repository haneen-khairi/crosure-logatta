import api from "..";

const search = (postcode: string, places: string[]) =>
  api.post(`core/places/`, {
    postcode,
    places,
  });

const searchHistory = () =>
  api.post("core/postcodes/history/", {
    by: "search_date",
    count: 5,
  });
  const Download = (postcode: string, places: any[]) =>
  api.post(`core/places/download/`, {
    postcode,
    places
  });

export { search, searchHistory , Download};
