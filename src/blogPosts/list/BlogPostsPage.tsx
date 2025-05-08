import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { blogPostPath } from "../../routes";
import { useBlogPostsQuery } from "./useBlogPostsQuery";
import type { IBlogPost } from "../../types";

export const BlogPostsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useBlogPostsQuery({
      page: 1,
      perPage: 10,
  });
  const onChangePage = (nextOrPrev: "next" | "prev") => {
    const currentPageParam = searchParams.get("page");
    const currentPage = currentPageParam ? parseInt(currentPageParam) : 1;
    const paramsCopy = new URLSearchParams(searchParams);
    const newPage = nextOrPrev === "next" ? currentPage + 1 : currentPage - 1;
    paramsCopy.set("page", newPage.toString());
    setSearchParams(paramsCopy);
  };
  console.log("data", data);
  return (
    <div>
      {data.blogPosts.map((post: IBlogPost) => (
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

