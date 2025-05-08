import { useQuery } from "@apollo/client";
import { BLOG_POST_QUERY, BLOG_POSTS_QUERY } from "./mocks";

export const useBlogPostsQuery = ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  return useQuery(BLOG_POSTS_QUERY, {
    variables: {
      page,
      perPage,
    },
  });
};
export const useBlogPostQuery = ({ id }: { id: string }) => {
  return useQuery(BLOG_POST_QUERY, {
    variables: {
      id,
    },
  });
};
