import axios from "axios";
import { WEA } from "../interface/WEA";

export const getWeatherData = async (
  location: string
): Promise<WEA.WeatherData> => {
  return await axios
    .get<WEA.WeatherData>("http://api.weatherapi.com/v1/current.json", {
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
        q: "Mexico, " + location,
        aqi: "yes",
      },
    })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};
