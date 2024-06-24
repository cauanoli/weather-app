import { getLocationWeatherData } from "./lib/getLocationWeatherData";
import { renderWeatherPage } from "./pages/weather";

const searchForm = document.querySelector("#search-location-form");
const search = searchForm.querySelector("#location");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const location = formData.get("location");

  const locationData = getLocationWeatherData(location);

  locationData.then((data) => {
    renderWeatherPage(data);
  });
});
