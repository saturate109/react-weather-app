import PropTypes from 'prop-types';
import React from 'react';

function Card({ longitude, latitude, weather }) {
  return (
    <div>
      {longitude && <p>longitude: {longitude}</p>}
      {latitude && <p>latitude: {latitude}</p>}
      {weather && (
        <>
          <p>{weather.data.name}</p>
          {weather.data.weather.map((data, index) => (
            <p key={index}>{data.description}</p>
          ))}
        </>
      )}
    </div>
  );
}

Card.propTypes = {
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  weather: PropTypes.object,
};

Card.defaultProps = {
  longitude: 0,
  latitude: 0,
  weather: null,
};
export default Card;
