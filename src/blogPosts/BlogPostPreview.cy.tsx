import { mount } from "@cypress/react";
import { blogPostPath } from "../routes";
import { BlogPostPreview } from "./BlogPostPreview";
import { MemoryRouter, useLocation } from "react-router-dom";

describe("<BlogPostPreview />", () => {
  it("show preview", () => {
    cy.mount(
      <MemoryRouter>
        <BlogPostPreview
          post={{ id: "1", title: "Test Post", content: "Test content" }}
        />
      </MemoryRouter>
    );
    cy.findByText("Test Post").should("be.visible");
    cy.findByRole("button", { name: "view" }).should("be.visible");
  });
  /**
   * issue: we want to assert url is being updated when clicking on view button
   *
   * solution that doesn't work:
   *
   * 1. it's not easy to assert url in cypress component test
   * if you use `cy.get(window.location.pathname)` or `cy.location("pathname")`
   * you will get  `/__cypress/iframes/index.html` instead of `/blog-post/1`
   * 2. or another solution is to spy on navigate function
   * but I'm not sure how to do that
   *
   *  workaround solution:
   * step 1: create ShowCurrentPathnameComponent, get pathname from `useLocation` hook, print pathname to ui
   * step 2: then we can easily assert url is being updated when clicking on view button
   */
  it("view should take you to blog post path", () => {
    mount(
      <MemoryRouter>
        <BlogPostPreview
          post={{ id: "1", title: "Test Post", content: "Test content" }}
        />
        <ShowCurrentPathnameComponent />
      </MemoryRouter>
    );
    cy.findByText("current pathname: /").should("be.visible");
    cy.findByRole("button", { name: "view" }).click();
    cy.findByText(`current pathname: ${blogPostPath("1")}`).should(
      "be.visible"
    );
  });
});

const ShowCurrentPathnameComponent = () => {
  const { pathname } = useLocation();
  return <div>current pathname: {pathname}</div>;
};
