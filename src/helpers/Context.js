import { createContext } from 'react';

export const Reducers = (state, action) => {
  switch (action.type) {
    case 'SET_COORDS':
      return { ...state, coords: action.value };
    case 'SET_CITY':
      return { ...state, city: action.value };
    case 'SET_WEATHER':
      return { ...state, weather: action.value };
    case 'SET_ERROR':
      return { ...state, error: action.value };
    default:
      throw new Error('Reducer action type not found');
  }
};

export const InitialState = {
  coords: { longitude: null, latitude: null },
  city: null,
  weather: null,
  error: { message: null },
};

const Context = createContext(null);
export default Context;
