describe("Subscribe", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("should subscribe the user to the email list", () => {
    cy.getByDataTest("email-input").type("faiz@gmail.com")
    cy.getByDataTest("submit-button").click()
    cy.getByDataTest("success-message")
      .should("exist")
      .contains("Success: faiz@gmail.com has been successfully subscribed")
  })

  it("should not allow invalid email address", () => {
    cy.getByDataTest("email-input").type("faiz")
    cy.getByDataTest("submit-button").click()
    cy.getByDataTest("success-message").should("not.exist")
  })

  it("should not allow invalid email address", () => {
    cy.getByDataTest("email-input").type("john@example.com")
    cy.getByDataTest("submit-button").click()
    cy.getByDataTest("server-error-message")
      .should("exist")
      .contains(
        "Error: john@example.com already exists. Please use a different email address."
      )
  })
})
