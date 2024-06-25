import { isSameDay } from "date-fns";
import { emitter } from "../../../lib/emitter";
import { CHANGE_DAY } from "../../../lib/contants";

export function createDayButton({ day, currentTime, active }) {
  const button = document.createElement("button");
  button.classList = `days__day-button button ${
    active.time === day.time ? "active" : ""
  }`;

  button.innerText = isSameDay(currentTime, day.time) ? "Today" : day.time;

  button.addEventListener("click", () => {
    emitter.emit(CHANGE_DAY, day);
  });

  return button;
}
