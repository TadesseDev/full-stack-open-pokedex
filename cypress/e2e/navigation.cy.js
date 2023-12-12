describe("navigation to an avatar works well", () => {
  it("visit the home page and navigate to the avatar page", () => {
    cy.visit("http://localhost:8080");
    cy.get("a:last").click();
    cy.contains("diglett");
  });
});
