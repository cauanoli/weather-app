import { State } from "../../../lib/State";

export function createHourCard(hour) {
  const { time, icon } = hour;
  const { temperature } = hour[State.getScale()];

  const container = document.createElement("button");
  container.classList = "hours-cards__card card";

  const timeElement = document.createElement("div");
  timeElement.classList = "hours-cards__card__time";
  timeElement.innerText = time.split(" ")[1];

  const iconElement = new Image();
  iconElement.classList = "hours-cards__card__icon";
  iconElement.src = icon;

  const temperatureElement = document.createElement("div");
  temperatureElement.classList = "hours-cards__card__temperature";
  temperatureElement.innerText = temperature;

  container.appendChild(timeElement);
  container.appendChild(iconElement);
  container.appendChild(temperatureElement);

  return container;
}
