export function getElement(locator, timeout = 15000) {
    return cy.get(locator, { timeout });
  }

export function generateRandomNineDigitNumber() {
    return Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
  }
  