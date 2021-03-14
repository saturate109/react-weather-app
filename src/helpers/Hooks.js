import React from 'react';
import axios from 'axios';
import Context from 'helpers/Context';

export function useGeoLocation() {
  const { dispatch } = React.useContext(Context);

  function getCoords() {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) =>
          resolve({ longitude: coords.longitude, latitude: coords.latitude }),
        ({ message }) => {
          dispatch({ type: 'SET_ERROR', value: { message } });
        }
      );
    });
  }

  function setCoords(coords) {
    dispatch({ type: 'SET_COORDS', value: coords });
  }

  return { getCoords, setCoords };
}

export function useOpenWeather() {
  const { dispatch } = React.useContext(Context);
  const endpoint = 'https://api.openweathermap.org/data/2.5/weather';
  async function getWeatherByCoords(coords) {
    console.log(process.env);
    const params = {
      appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
      lon: coords.longitude,
      lat: coords.latitude,
    };
    return await axios
      .get(endpoint, {
        params,
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', value: error });
      });
  }

  function setWeather(data) {
    dispatch({ type: 'SET_WEATHER', value: data });
  }
  return { getWeatherByCoords, setWeather };
}
