import { createHourCard } from "./createHourCard";

export function renderHours({ data, activeHour }) {
  const container = document.createElement("div");
  container.classList = "hours-cards container";

  const title = document.createElement("h2");
  title.innerText = "Climate today";
  title.classList = "hours-cards__title";

  const cards = document.createElement("div");
  cards.classList = "hours-cards__cards";

  data.hour.forEach((hour) => {
    const card = createHourCard({ hour, activeHour });
    cards.appendChild(card);
  });

  container.appendChild(title);
  container.appendChild(cards);

  return container;
}
