export function clearContainer(container) {
  [...container.childNodes].forEach((child) => {
    container.removeChild(child);
  });
}
