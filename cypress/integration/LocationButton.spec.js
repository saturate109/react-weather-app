describe('Location Button', () => {
  const mockLocation = (latitude, longitude) => {
    return {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, 'getCurrentPosition', (cb, err) => {
          if (latitude && longitude) {
            return cb({ coords: { latitude, longitude } });
          }
          throw err({
            code: 1,
            message: 'Error retrieving current location',
          });
        }).as('getCurrentPosition');
      },
    };
  };

  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather*',
      },
      { fixture: 'currentWeather.json' }
    );
  });

  it('contains the correct text', () => {
    cy.visit('/');

    // Assertion
    cy.get('button').contains('Current Weather');
  });

  it('when clicked - successfully retrieves the geolocation and weather', () => {
    cy.visit('/', mockLocation(51.4014, -0.1073));
    cy.get('button').click();

    // Assertions
    cy.get('@getCurrentPosition').should('have.been.called');
    cy.get('p').contains('light rain');
  });

  it('when clicked - geolocation retrieval is blocked', () => {
    cy.visit('/', mockLocation(null, null));
    cy.get('button').click();

    // Assertion
    cy.get('p').contains('Error retrieving current location');
  });
});
