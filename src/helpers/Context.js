import { createContext } from 'react';

export const Reducers = (state, action) => {
  switch (action.type) {
    case 'SET_COORDS':
      return { ...state, coords: action.value };
    case 'SET_CITY':
      return { ...state, city: action.value };
    case 'SET_WEATHER':
      return { ...state, weather: action.value };
    default:
      throw new Error();
  }
};

export const InitialState = {
  coords: { latitude: null, longitude: null },
  city: null,
  weather: { description: null },
};

const Context = createContext(null);
export default Context;
