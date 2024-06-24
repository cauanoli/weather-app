export function createInfo({ name, data }) {
  const container = document.createElement("div");
  container.classList = "weather__detailed-info__item";

  const title = document.createElement("p");
  title.classList = "weather__detailed-info__item__title";
  title.innerText = name;

  const value = document.createElement("p");
  value.classList = "weather__detailed-info__item__value";
  value.innerText = data;

  container.appendChild(title);
  container.appendChild(value);

  return container;
}
