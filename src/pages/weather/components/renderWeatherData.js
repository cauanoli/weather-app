import { createBasicInfo } from "./createBasicInfo";
import { createDetailedInfo } from "./createDetailedInfo";

export function renderWeatherData(data) {
  const container = document.createElement("div");
  container.classList = "weather container";

  const basicInfo = createBasicInfo(data);
  const detailedInfo = createDetailedInfo(data);

  container.appendChild(basicInfo);
  container.appendChild(detailedInfo);

  return container;
}
