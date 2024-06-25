import { createDayButton } from "./createDayButton";

export function renderForecastDays({ days, current, active }) {
  const container = document.createElement("div");
  container.classList = "days container";

  const title = document.createElement("h2");
  title.innerText = "Week climate";
  title.classList = "days__title";

  container.appendChild(title);

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
