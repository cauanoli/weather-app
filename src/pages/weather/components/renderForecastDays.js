import { createDayButton } from "./createDayButton";

export function renderForecastDays({ days, current, active }) {
  const container = document.createElement("div");
  container.classList = "days container";

  const title = document.createElement("h2");
  title.innerText = "Week climate";
  title.classList = "days__title";

  const dayButtons = document.createElement("div");
  dayButtons.classList = "days__days";

  container.appendChild(title);

  days.forEach((day) => {
    const dayButton = createDayButton({
      day,
      currentTime: current.time,
      active,
    });
    dayButtons.appendChild(dayButton);
  });

  container.appendChild(dayButtons);

  return container;
}
