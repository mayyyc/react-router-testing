// big component
// imagine when you have more features like filters, search, etc.
// things tangle up together: ui, query, routing
// hard to test one thing without testing another at the same time
// end up with one big test file, when something fails, you have no idea what exactly is failing

import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { blogPostPath } from "../routes";

export const BlogPostsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useBlogPostQuery({
    variables: {
      page: searchParams.get("page"),
      perPage: searchParams.get("perPage"),
    },
  });
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
      {data.blogPosts.map((post) => (
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
