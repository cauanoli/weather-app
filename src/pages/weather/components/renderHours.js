import { createHourCard } from "./createHourCard";

export function renderHours(data) {
  const container = document.createElement("div");
  container.classList = "hours-cards";

  data.hour.forEach((hour) => {
    const card = createHourCard(hour);
    container.appendChild(card);
  });

  return container;
}
