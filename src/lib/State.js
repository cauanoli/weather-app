function createState() {
  let scale = "celsius";

  function setScale(newScale) {
    scale = newScale;
  }

  function getScale() {
    return scale;
  }

  return {
    setScale,
    getScale,
  };
}

export const State = createState();
