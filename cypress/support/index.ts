/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByDataTest(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}
