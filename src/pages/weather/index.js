import { isSameDay, isSameHour } from "date-fns";

import { renderWeatherData } from "./components/renderWeatherData";

export function renderWeatherPage(data) {
  const container = document.querySelector("#container");
  const currentDay = data.days.find((day) => {
    return isSameDay(day.time, data.current.time.split(" ")[0]);
  });

  const currentHour = currentDay.hour.find((hour) => {
    console.log({
      hour: hour.time.split(" ")[1],
      day: new Date(),
    });

    return isSameHour(hour.time, new Date());
  });

  const weather = renderWeatherData(currentHour);
  const hours = renderHours(currentDay);
  const days = renderForecastDays(data.days);

  container.appendChild(weather);
  container.appendChild(hours);
  container.appendChild(days);
}

function renderHours() {
  return document.createElement("div");
}

function renderForecastDays(days) {
  return document.createElement("div");
}
