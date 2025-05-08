import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogPostQuery } from "../queries";
import { blogPostsPath } from "../routes";

export const BlogPostPage: React.FC = () => {
  const navigate = useNavigate();
  const { postUid } = useParams<{ postUid: string }>();
  const { data } = useBlogPostQuery({
    id: postUid || "",
  });
  console.log(data);
  return (
    <div>
      <button onClick={() => navigate(blogPostsPath)}>Back</button>
      {data?.blogPost.title}
      {data?.blogPost.content}
    </div>
  );
};
