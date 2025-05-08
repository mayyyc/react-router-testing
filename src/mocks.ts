import { gql } from "@apollo/client";

export const BLOG_POSTS_QUERY = gql`
  query blogPosts($page: Int!, $perPage: Int!) {
    blogPosts(page: $page, perPage: $perPage) {
      id
      title
      content
    }
  }
`;
export const BLOG_POST_QUERY = gql`
  query blogPost($id: ID!) {
    blogPost(id: $id) {
      id
      title
      content
    }
  }
`;

export const mocks = [
  {
    request: {
      query: BLOG_POSTS_QUERY,
      variables: {
        page: 1,
        perPage: 10,
      },
    },
    result: {
      data: {
        blogPosts: [
          { __typename: "BlogPost",id: "1", title: "Blog Post 1", content: "Content 1" },
          { __typename: "BlogPost",id: "2", title: "Blog Post 2", content: "Content 2" },
          { __typename: "BlogPost",id: "3", title: "Blog Post 3", content: "Content 3" },
          { __typename: "BlogPost",id: "4", title: "Blog Post 4", content: "Content 4" },
          { __typename: "BlogPost",id: "5", title: "Blog Post 5", content: "Content 5" },
          { __typename: "BlogPost",id: "6", title: "Blog Post 6", content: "Content 6" },
          { __typename: "BlogPost",id: "7", title: "Blog Post 7", content: "Content 7" },
          { __typename: "BlogPost",id: "8", title: "Blog Post 8", content: "Content 8" },
          { __typename: "BlogPost",id: "9", title: "Blog Post 9", content: "Content 9" },
          { __typename: "BlogPost",id: "10", title: "Blog Post 10", content: "Content 10" },
        ],
      },
    },
  },
  {
    request: {
      query: BLOG_POSTS_QUERY,
      variables: {
        page: 2,
        perPage: 10,
      },
    },
    result: {
      data: {
        blogPosts: [
          { __typename: "BlogPost",id: "11", title: "Blog Post 11", content: "Content 11" },
          { __typename: "BlogPost",id: "12", title: "Blog Post 12", content: "Content 12" },
          { __typename: "BlogPost",id: "13", title: "Blog Post 13", content: "Content 13" },
          { __typename: "BlogPost",id: "14", title: "Blog Post 14", content: "Content 14" },
          { __typename: "BlogPost",id: "15", title: "Blog Post 15", content: "Content 15" },
          { __typename: "BlogPost",id: "16", title: "Blog Post 16", content: "Content 16" },
          { __typename: "BlogPost",id: "17", title: "Blog Post 17", content: "Content 17" },
          { __typename: "BlogPost",id: "18", title: "Blog Post 18", content: "Content 18" },
          { __typename: "BlogPost",id: "19", title: "Blog Post 19", content: "Content 19" },
          { __typename: "BlogPost",id: "20", title: "Blog Post 20", content: "Content 20" },
        ],
      },
    },
  },
  {
    request: {
      query: BLOG_POST_QUERY,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        blogPost: {
          __typename: "BlogPost",
          id: "1",
          title: "Blog Post 1",
          content: "Content 1",
        },
      },
    },
  },
];
