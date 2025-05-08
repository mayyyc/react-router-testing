import { gql } from "@apollo/client";

export const BLOG_POSTS_QUERY = gql`
  query blogPosts($page: Int!, $perPage: Int!) {
    blogPosts(page: $page, perPage: $perPage) {
      entries {
        id
        title
        content
      }
      meta {
        totalCount
      }
    }
  }
`;
export const BLOG_POST_QUERY = gql`
  query blogPost($id: String!) {
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
        perPage: 3,
      },
    },
    result: {
      data: {
        blogPosts: {
          __typename: "BlogPosts",
          entries: [
            {
              __typename: "BlogPost",
              id: "1",
              title: "Blog Post 1",
              content: "Content 1",
            },
            {
              __typename: "BlogPost",
              id: "2",
              title: "Blog Post 2",
              content: "Content 2",
            },
            {
              __typename: "BlogPost",
              id: "3",
              title: "Blog Post 3",
              content: "Content 3",
            },
          ],
          meta: {
            __typename: "Meta",
            totalCount: 6,
          },
        },
      },
    },
  },
  {
    request: {
      query: BLOG_POSTS_QUERY,
      variables: {
        page: 2,
        perPage: 3,
      },
    },
    result: {
      data: {
        blogPosts: {
          __typename: "BlogPosts",
          entries: [
            {
              __typename: "BlogPost",
              id: "4",
              title: "Blog Post 4",
              content: "Content 4",
            },
            {
              __typename: "BlogPost",
              id: "5",
              title: "Blog Post 5",
              content: "Content 5",
            },
            {
              __typename: "BlogPost",
              id: "6",
              title: "Blog Post 6",
              content: "Content 6",
            },
          ],
          meta: {
            __typename: "Meta",
            totalCount: 6,
          },
        },
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
