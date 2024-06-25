import { CELSIUS_SCALE, FAHRENHEIT_SCALE } from "./contants";

export function changeScale(scale) {
  if (scale === CELSIUS_SCALE) {
    return FAHRENHEIT_SCALE;
  }

  return CELSIUS_SCALE;
}
