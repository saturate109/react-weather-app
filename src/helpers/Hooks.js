export function useGeoLocation() {
  function getCoords() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) =>
          resolve({ longitude: coords.longitude, latitude: coords.latitude }),
        (error) => reject(error.message)
      );
    });
  }

  return { getCoords };
}
