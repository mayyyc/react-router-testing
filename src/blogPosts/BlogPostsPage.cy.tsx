import { BlogPostsPage } from "./BlogPostsPage";
import { mount } from "@cypress/react";
/*
 * only need to test the happy flow to make sure search param, query, pagination are working together
 * as all the other logic is covered in the lower components
 */

describe("<BlogPostsPage />", () => {
  it("show posts", () => {
    mount(<BlogPostsPage />);
  });
});
