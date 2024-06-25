import { CHANGE_HOUR } from "../../../lib/contants";
import { emitter } from "../../../lib/emitter";
import { State } from "../../../lib/State";

export function createHourCard({ hour, activeHour }) {
  const scale = State.getScale();
  const symbol = State.getScaleSymbol();

  const { time, icon } = hour;
  const { temperature } = hour[scale];

  const container = document.createElement("button");
  container.classList = `hours-cards__card card ${
    hour.time === activeHour.time ? "active" : ""
  }`;

  const timeElement = document.createElement("div");
  timeElement.classList = "hours-cards__card__time";
  timeElement.innerText = time.split(" ")[1];

  const iconElement = new Image();
  iconElement.classList = "hours-cards__card__icon";
  iconElement.src = icon;

  const temperatureElement = document.createElement("div");
  temperatureElement.classList = "hours-cards__card__temperature";
  temperatureElement.innerText = `${temperature}${symbol}`;

  container.appendChild(timeElement);
  container.appendChild(iconElement);
  container.appendChild(temperatureElement);

  container.addEventListener("click", () => {
    emitter.emit(CHANGE_HOUR, hour);
  });

  return container;
}
