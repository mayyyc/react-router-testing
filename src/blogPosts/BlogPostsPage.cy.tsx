import { BlogPostsPage } from "./BlogPostsPage";

/*
 * only need to test the happy flow to make sure search param, query, pagination are working together
 * as all the other logic is covered in the lower components
 */

describe("<BlogPostsPage />", () => {
  it("show posts", () => {
    cy.mount(<BlogPostsPage />);
  });
});
