import { mount } from "@cypress/react";
import { useSearchParam } from "./useSearchParam";
import { MemoryRouter, useLocation } from "react-router-dom";

const TestComponent = () => {
  const [value, setValue] = useSearchParam("page");
  const { search } = useLocation();
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>search: {search}</div>
    </div>
  );
};

/**
 * issue: with useSearchParam function, we want to test two things:
 * 1. we can get correct initial value from search params
 * 2. we can update value to search params
 * but it's hard to test the hook and assert the value
 *
 * solution: we create a TestComponent that uses the hook
 * and renders the search params value on the screen so we can assert it
 *
 * alternative solution: we can seperate the useSearchParams hook and the actual logic,
 * have that logic in a pure function, then we can test the function
 * check `./alternative/useSearchParamAlternative.ts` for implementation
 */
describe("useSearchParam", () => {
  it("should have initial value from search param", () => {
    mount(
      <MemoryRouter initialEntries={["/blog-posts?page=5"]}>
        <TestComponent />
      </MemoryRouter>
    );
    cy.get("input").should("have.attr", "value", "5");
    cy.findByText("search: ?page=5").should("be.visible");
  });
  it("should update value to search param", () => {
    mount(
      <MemoryRouter initialEntries={["/blog-posts?page=5"]}>
        <TestComponent />
      </MemoryRouter>
    );
    cy.get("input").should("have.attr", "value", "5").clear().type("10");
    cy.findByText("search: ?page=10").should("be.visible");
  });
});
