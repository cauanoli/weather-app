import { createDayButton } from "./createDayButton";

export function renderForecastDays({ days, current, active }) {
  const container = document.createElement("div");
  container.classList = "days container";

  days.forEach((day) => {
    const dayButton = createDayButton({
      day,
      currentTime: current.time,
      active,
    });
    container.appendChild(dayButton);
  });

  return container;
}
