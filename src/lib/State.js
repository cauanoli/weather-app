import { CELSIUS_SCALE, FAHRENHEIT_SCALE } from "./contants";

function createState() {
  let scale = CELSIUS_SCALE;

  function setScale(newScale) {
    scale = newScale;
  }

  function getScale() {
    return scale;
  }

  function getWindScale() {
    if (scale === FAHRENHEIT_SCALE) {
      return "mph";
    }

    return "km/h";
  }

  function getScaleSymbol() {
    return "°" + scale[0].toUpperCase();
  }

  return {
    setScale,
    getScale,
    getWindScale,
    getScaleSymbol,
  };
}

export const State = createState();
