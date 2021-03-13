import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Context from 'helpers/Context';
import { useGeoLocation } from 'helpers/Hooks';

function WeatherButton({ title }) {
  const buttonRef = React.useRef();
  const { getCoords } = useGeoLocation();
  const { state, dispatch } = React.useContext(Context);

  async function getLocation() {
    const coords = await getCoords().catch((err) => {
      console.error(err); // TODO: Handle caught rejection
    });
    dispatch({ type: 'SET_COORDS', value: coords });
  }
  return <Button title={title} onClick={getLocation} ref={buttonRef}></Button>;
}

WeatherButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default WeatherButton;
