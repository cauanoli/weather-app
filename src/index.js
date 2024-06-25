import "./styles.css";

import { renderWeatherPage } from "./pages/weather";

import { getLocationWeatherData } from "./lib/getLocationWeatherData";
import { State } from "./lib/State";
import { changeScale } from "./lib/changeScale";
import { CHANGE_SCALE } from "./lib/contants";
import { emitter } from "./lib/emitter";

const searchForm = document.querySelector("#search-location-form");
const search = searchForm.querySelector("#location");
const changeScaleButton = document.querySelector("#change-scale");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchForm);
  const location = formData.get("location");

  const locationData = getLocationWeatherData(location);

  locationData.then((data) => {
    renderWeatherPage(data);
    search.value = `${data.name}, ${data.country}`;
  });
});

changeScaleButton.innerText = State.getScale();

changeScaleButton.addEventListener("click", () => {
  State.setScale(changeScale(State.getScale()));
  emitter.emit(CHANGE_SCALE, State.getScale());
  changeScaleButton.innerText = State.getScale();
});
