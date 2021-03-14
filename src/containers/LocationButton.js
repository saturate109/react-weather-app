import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import { useGeoLocation, useOpenWeather } from 'helpers/Hooks';

function WeatherButton({ title }) {
  const buttonRef = React.useRef();
  const { getCoords, setCoords } = useGeoLocation();
  const { getWeatherByCoords, setWeather } = useOpenWeather();

  async function handleClick() {
    const coords = await getCoords();
    setCoords(coords);
    setWeather(await getWeatherByCoords(coords));
  }

  return <Button title={title} onClick={handleClick} ref={buttonRef}></Button>;
}

WeatherButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WeatherButton;
