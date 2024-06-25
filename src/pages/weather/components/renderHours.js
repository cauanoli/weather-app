import { createHourCard } from "./createHourCard";

export function renderHours({ data, activeHour }) {
  const container = document.createElement("div");
  container.classList = "hours-cards";

  data.hour.forEach((hour) => {
    const card = createHourCard({ hour, activeHour });
    container.appendChild(card);
  });

  return container;
}
