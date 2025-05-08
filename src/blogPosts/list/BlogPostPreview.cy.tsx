import { BlogPostPreview } from "./BlogPostPreview";
import { MemoryRouter } from "react-router-dom";

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
    cy.findByRole("button", { name: "view" }).click();
  });
});
