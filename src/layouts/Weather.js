import React from 'react';
import Context, { Reducers, InitialState } from 'helpers/Context';
import LocationButton from 'containers/LocationButton';
import Card from 'components/Card';

function Weather() {
  const [state, dispatch] = React.useReducer(Reducers, InitialState);

  return (
    <React.Fragment>
      <Context.Provider value={{ state, dispatch }}>
        <LocationButton title="Current Weather" />
        {state.error.message ? (
          <p>{state.error.message}</p>
        ) : (
          <Card
            longitude={state.coords.longitude}
            latitude={state.coords.latitude}
            weather={state.weather}
          />
        )}
      </Context.Provider>
    </React.Fragment>
  );
}

export default Weather;
