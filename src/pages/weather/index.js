import { isSameDay, isSameHour, format } from "date-fns";

import { renderWeatherData } from "./components/renderWeatherData";
import { renderHours } from "./components/renderHours";
import { renderForecastDays } from "./components/renderForecastDays";

export function renderWeatherPage(data) {
  const container = document.querySelector("#container");
  const currentDay = data.days.find((day) => {
    return isSameDay(day.time, data.current.time.split(" ")[0]);
  });

  const currentHour = currentDay.hour.find((hour) =>
    isSameHour(hour.time, data.current.time)
  );

  const weather = renderWeatherData(currentHour);
  const hours = renderHours(currentDay);
  const days = renderForecastDays({ days: data.days, current: currentDay });

  container.appendChild(weather);
  container.appendChild(hours);
  container.appendChild(days);
}
