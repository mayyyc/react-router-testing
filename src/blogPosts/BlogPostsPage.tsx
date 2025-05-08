import React from "react";
import { useBlogPostsQuery } from "../queries";
import type { IBlogPost } from "../types";
import { BlogPostPreview } from "./BlogPostPreview";
import { useSearchParam } from "../common/searchParam/useSearchParam";
import { Pagination } from "../common/pagination/Pagination";

const perPage = 3;

export const BlogPostsPage: React.FC = () => {
  const [pageParam, setPageParam] = useSearchParam("page");
  const pageInt = parseInt(pageParam) || 1;
  const { data } = useBlogPostsQuery({
    page: pageInt,
    perPage: 3,
  });
  return (
    <div>
      {data?.blogPosts.entries.map((post: IBlogPost) => (
        <BlogPostPreview key={post.id} post={post} />
      ))}
      <Pagination
        page={pageInt.toString()}
        setPage={setPageParam}
        totalPages={data?.blogPosts.meta.totalCount / perPage || 0}
      />
    </div>
  );
};
