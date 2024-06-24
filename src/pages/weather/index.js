import { isSameDay, isSameHour } from "date-fns";

import { renderWeatherData } from "./components/renderWeatherData";
import { renderHours } from "./components/renderHours";

export function renderWeatherPage(data) {
  const container = document.querySelector("#container");
  const currentDay = data.days.find((day) => {
    return isSameDay(day.time, data.current.time.split(" ")[0]);
  });

  const currentHour = currentDay.hour.find((hour) =>
    isSameHour(hour.time, new Date())
  );

  const weather = renderWeatherData(currentHour);
  const hours = renderHours(currentDay);
  const days = renderForecastDays(data.days);

  container.appendChild(weather);
  container.appendChild(hours);
  container.appendChild(days);
}

function renderForecastDays(days) {
  return document.createElement("div");
}
