import React from "react";
import { BlogPostsPage } from "./BlogPostsPage";

const TestComponent = () => {};

describe("useSearchParams", () => {
  it("show posts", () => {
    cy.mount(<BlogPostsPage />);
  });
});
