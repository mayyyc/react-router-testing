import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BlogPostsPage } from "./blogPosts/list/BlogPostsPage";
import { blogPostsPath, blogPostsPathDeprecated } from "./routes";
import { MockedProvider } from "@apollo/client/testing";
import { mocks } from "./mocks";

export default function App() {
  return (
    <MockedProvider mocks={mocks}>
      <BrowserRouter>
        <Routes>
          <Route
            path={blogPostsPathDeprecated}
            element={<Navigate replace to={blogPostsPath} />}
          />
          <Route path={"/"} element={<Navigate replace to={blogPostsPath} />} />
          <Route path={blogPostsPath} element={<BlogPostsPage />} />
        </Routes>
      </BrowserRouter>
    </MockedProvider>
  );
}
