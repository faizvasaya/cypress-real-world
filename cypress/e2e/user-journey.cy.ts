describe("User Journey", () => {
  it("should find a course and complete the course lessons", () => {
    cy.visit("http://localhost:3000")

    cy.getByDataTest("course-0").find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")

    cy.getByDataTest("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )

    cy.getByDataTest("challenge-answer-0").click()
    cy.getByDataTest("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
    cy.getByDataTest("challenge-answer-0").click()
    cy.getByDataTest("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/setting-up-data-before-each-test"
    )
    cy.getByDataTest("challenge-answer-0").click()
    cy.getByDataTest("next-lesson-button").should("exist").click()

    cy.location("pathname").should("eq", "/")
  })
})
