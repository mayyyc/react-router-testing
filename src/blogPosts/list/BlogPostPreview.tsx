import React from "react";
import { blogPostPath } from "../../routes";
import type { IBlogPost } from "../../types";
import { useNavigate } from "react-router-dom";

export const BlogPostPreview: React.FC<{ post: IBlogPost }> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div>
      {post.title}
      <button onClick={() => navigate(blogPostPath(post.id))}>view</button>
    </div>
  );
};
