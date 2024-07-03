//your code here
const baseUrl = "http://localhost:3000";
describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });
  it("Checking description", () => {
    cy.visit(baseUrl + "/main.html");
    cy.wait(1000); // Add this line to wait for 1000 milliseconds
    cy.get("p").should("have.attr", "class", "movieDetail");
    cy.get("p").should("have.css", "position");
    cy.get("p").should("have.css", "top");
    cy.get("p").should("have.css", "width");
    cy.get("p").should("have.css", "text-align");
    cy.get("p").should("have.css", "font-size");
  });
  it("Checking image", () => {
    cy.visit(baseUrl + "/main.html");
    cy.wait(1000); // Add this line to wait for 1000 milliseconds
    cy.get("img").should("have.attr", "class", "moviePic");
    cy.get("img").should("have.css", "width");
    cy.get("img").should("have.css", "height");
    cy.get("img").should("have.css", "opacity");
  });
});