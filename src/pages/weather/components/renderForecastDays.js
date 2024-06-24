import { createDayButton } from "./createDayButton";

export function renderForecastDays({ days, current }) {
  const container = document.createElement("div");
  container.classList = "days";

  days.forEach((day) => {
    const dayButton = createDayButton({ day, currentTime: current.time });
    container.appendChild(dayButton);
  });

  return container;
}
