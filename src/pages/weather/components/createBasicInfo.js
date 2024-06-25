import { isSameDay, format } from "date-fns";
import { State } from "../../../lib/State";

export function createBasicInfo(data) {
  const basicInfo = document.createElement("div");
  basicInfo.classList = "weather__basic-info";

  const time = document.createElement("div");
  time.classList = "weather__basic-info__date";

  const weatherDate = isSameDay(new Date(), data.time)
    ? `Today, ${format(data.time, "HH:mm")}`
    : `${format(data.time, "P, HH:mm")}`;

  time.innerText = weatherDate;

  const temperatureContainer = document.createElement("div");
  temperatureContainer.classList = "weather__basic-info__temperature";

  const weatherIcon = new Image();
  weatherIcon.classList = "weather__basic-info__temperature__icon";
  weatherIcon.src = data.icon.replace("64x64", "128x128");

  const temperature = document.createElement("div");
  temperature.classList = "weather__basic-info__temperature__temperature";
  temperature.innerText = data[State.getScale()].temperature;

  temperatureContainer.appendChild(weatherIcon);
  temperatureContainer.appendChild(temperature);

  const condition = document.createElement("div");
  condition.classList = "weather__basic-info__condition";
  condition.innerText = data.condition;

  basicInfo.appendChild(time);
  basicInfo.appendChild(temperatureContainer);
  basicInfo.appendChild(condition);

  return basicInfo;
}
