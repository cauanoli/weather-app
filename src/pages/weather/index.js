import { isSameDay, isSameHour, format } from "date-fns";

import { renderWeatherData } from "./components/renderWeatherData";
import { renderHours } from "./components/renderHours";
import { renderForecastDays } from "./components/renderForecastDays";
import { clearContainer } from "../../lib/clearContainer";
import { emitter } from "../../lib/emitter";
import { CHANGE_DAY, CHANGE_HOUR } from "../../lib/contants";

export function renderWeatherPage(data) {
  const container = document.querySelector("#container");
  let currentDay = data.days.find((day) => {
    return isSameDay(day.time, data.current.time.split(" ")[0]);
  });
  let currentHour = currentDay.hour.find((hour) =>
    isSameHour(hour.time, data.current.time)
  );

  let activeHour = currentHour;
  let activeDay = currentDay;

  function render() {
    const weather = renderWeatherData(activeHour);
    const hours = renderHours({ data: activeDay, activeHour });
    const days = renderForecastDays({
      days: data.days,
      current: currentDay,
      active: activeDay,
    });

    clearContainer(container);
    container.appendChild(weather);
    container.appendChild(hours);
    container.appendChild(days);
  }

  emitter.on(CHANGE_HOUR, (hour) => {
    activeHour = hour;
    render();
  });

  emitter.on(CHANGE_DAY, (day) => {
    activeDay = day;
    activeHour = activeDay.hour[0];
    render();
  });

  render();
}
