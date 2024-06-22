const API_KEY = process.env.API_KEY;

function getLocationUrl(locationName) {
  const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${locationName}&aqi=no`;
  return url;
}

async function getLocationWeatherData(locationName) {
  try {
    const request = new Request(getLocationUrl(locationName), {
      mode: "cors",
    });
    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getLocationWeatherData("London");
