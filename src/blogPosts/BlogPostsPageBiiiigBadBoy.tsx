// big bad boy component
// imagine when you have more features like filters, search, etc.
// things tangle up together: ui, query, routing
// hard to test one thing without testing another at the same time
// end up with one big test file, when something fails, you have no idea what exactly is failing

import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { blogPostPath } from "../routes";
import { useBlogPostsQuery } from "../queries";
import type { IBlogPost } from "../types";

export const BlogPostsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useBlogPostsQuery({
    /**
     * bad practice 1:
     * implement `searchParams.get("page")` and parseInt multiple times in this file
     * 1. potentially need to test the same implementation in each place
     * 2. what if we change the implementation in one place, but forget to change in another place? e.g. if we change the key from "page" to "p"
     *
     * solution:
     * the `searchParams.get("[key]")` and set param action will be used in other pages in the future
     * we can create a custom hook to handle this and test it so we know it will work as expected in the places it's being used
     * check `/src/common/searchParam/useSearchParam.ts` for implementation
     */
    page: parseInt(searchParams.get("page") || "1"),
    perPage: 3,
  });
  /**
   * bad practice 2:
   * 1. if we want to test the pagination logic, we have to set up the mock queries and url params
   *    which has nothing to do with the pagination if you think about it
   * 2. already seeing a bug here, the page can go below 1 or beyond the max page
   *    we want to add tests to cover all the edge cases, but do we want to add test on the level of this component?
   * 3. the pagination will be used in other pages in the future too, do we copy and paste this logic here?
   *
   * solution:
   * create its own component and test everything there
   * check `/src/common/pagination/Pagination.tsx` for implementation
   */
  const onChangePage = (nextOrPrev: "next" | "prev") => {
    const currentPageParam = searchParams.get("page");
    const currentPage = currentPageParam ? parseInt(currentPageParam) : 1;
    const paramsCopy = new URLSearchParams(searchParams);
    const newPage = nextOrPrev === "next" ? currentPage + 1 : currentPage - 1;
    paramsCopy.set("page", newPage.toString());
    setSearchParams(paramsCopy);
  };
  return (
    <div>
      {data?.blogPosts.map((post: IBlogPost) => (
        <div>
          {post.title}
          <button onClick={() => navigate(blogPostPath(post.id))}>view</button>
        </div>
      ))}
      <button onClick={() => onChangePage("prev")}>prev page </button>
      <div>{searchParams.get("page")}</div>
      <button onClick={() => onChangePage("next")}>next page </button>
    </div>
  );
};
