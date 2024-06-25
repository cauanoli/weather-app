import { CELSIUS_SCALE } from "../../../lib/contants";
import { State } from "../../../lib/State";
import { createInfo } from "./createInfo";

export function createDetailedInfo(data) {
  const detailedInfo = document.createElement("div");
  detailedInfo.classList = "weather__detailed-info";

  const scale = State.getScale();
  const windScale = State.getWindScale();
  const symbol = State.getScaleSymbol();

  const feelsLike = createInfo({
    name: "feels like",
    data: `${data[scale].feelsLike}${symbol}`,
  });

  const humidity = createInfo({
    name: "humidity",
    data: `${data.humidity}%`,
  });

  const wind = createInfo({
    name: "wind",
    data: `${data[scale].wind} ${windScale}`,
  });

  const windDegree = createInfo({
    name: "wind degree",
    data: data.windDegree,
  });

  const rainChance = createInfo({
    name: "chance of raining",
    data: `${data.rainChance}%`,
  });

  detailedInfo.appendChild(feelsLike);
  detailedInfo.appendChild(wind);
  detailedInfo.appendChild(windDegree);
  detailedInfo.appendChild(humidity);
  detailedInfo.appendChild(rainChance);

  return detailedInfo;
}
