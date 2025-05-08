import { Pagination } from "./Pagination";

describe("<Pagination />", () => {
  it("show current page number", () => {
    cy.mount(<Pagination page="2" setPage={cy.stub()} totalPages={5} />);
    cy.findByText("2").should("be.visible");
  });
  it("click next page should set page", () => {
    const setPage = cy.stub();
    cy.mount(<Pagination page="2" setPage={setPage} totalPages={5} />);
    cy.findByRole("button", { name: "next page" }).click();
    cy.wrap(setPage).should("have.been.calledWith", "3");
  });
  it("should disable next button when no next page", () => {
    cy.mount(<Pagination page="3" setPage={cy.stub()} totalPages={3} />);
    cy.findByRole("button", { name: "prev page" }).should("not.be.disabled");
    cy.findByRole("button", { name: "next page" }).should("be.disabled");
  });
  it("click prev page should set page", () => {
    const setPage = cy.stub();
    cy.mount(<Pagination page="3" setPage={setPage} totalPages={3} />);
    cy.findByRole("button", { name: "prev page" }).click();
    cy.wrap(setPage).should("have.been.calledWith", "2");
  });
});
