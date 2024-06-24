const API_KEY = process.env.API_KEY;
const FORECAST_DAYS = 3;

function getLocationUrl(locationName) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${locationName}&days=${FORECAST_DAYS}&aqi=no&alerts=no`;
  return url;
}

export async function getLocationWeatherData(locationName, processed = true) {
  try {
    const request = new Request(getLocationUrl(locationName), {
      mode: "cors",
    });
    const response = await fetch(request);
    const data = await response.json();

    if (processed) {
      const processedData = processWeatherData(data);
      return processedData;
    }

    return data;
  } catch (error) {
    console.log(error);
  }
}

function processWeatherData(data) {
  const weatherData = {
    name: data.location.name,
    country: data.location.country,
    current: {
      time: data.location.localtime,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      windDegree: data.current.wind_degree,
      humidity: data.current.humidity,
      celsius: {
        temperature: data.current.temp_c,
        wind: data.current.wind_kph,
        feelsLike: data.current.feelslike_c,
      },
      fahrenheit: {
        temperature: data.current.temp_f,
        wind: data.current.wind_mpm,
        feelsLike: data.current.feelslike_f,
      },
    },
    days: [
      ...data.forecast.forecastday.map((day) => {
        return {
          date: day.date,
          hour: [
            ...day.hour.map((hour) => {
              return {
                time: hour.time,
                condition: hour.condition.text,
                icon: hour.condition.icon,
                windDegree: hour.wind_degree,
                humidity: hour.humidity,
                rainChance: hour.chance_of_rain,
                fahrenheit: {
                  temperature: hour.temp_f,
                  feelsLike: hour.feelslike_f,
                  wind: hour.wind_mpm,
                },
                celsius: {
                  temperature: hour.temp_c,
                  feelsLike: hour.feelslike_c,
                  wind: hour.wind_kph,
                },
              };
            }),
          ],
        };
      }),
    ],
  };

  return weatherData;
}
