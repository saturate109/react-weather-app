import React from 'react';
import WeatherButton from 'containers/WeatherButton';
import Context, { Reducers, InitialState } from 'helpers/Context';

function Weather() {
  const [state, dispatch] = React.useReducer(Reducers, InitialState);

  return (
    <React.Fragment>
      <Context.Provider value={{ state, dispatch }}>
        <WeatherButton title="Current Weather" />
        <p>longitude: {state.coords.longitude}</p>
        <p>latitude: {state.coords.latitude}</p>
      </Context.Provider>
    </React.Fragment>
  );
}

export default Weather;
