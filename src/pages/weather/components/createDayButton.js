import { isSameDay } from "date-fns";

export function createDayButton({ day, currentTime }) {
  const button = document.createElement("button");
  button.classList = "days__day-button button";

  button.innerText = isSameDay(currentTime, day.time) ? "Today" : day.time;

  return button;
}
