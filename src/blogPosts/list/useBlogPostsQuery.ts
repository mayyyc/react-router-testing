import { useQuery } from "@apollo/client"
import { BLOG_POSTS_QUERY } from "../../mocks"

export const useBlogPostsQuery = ({page,perPage}:{page: number, perPage: number}) => {
    return useQuery(
        BLOG_POSTS_QUERY,
        {
        variables: {
            page,
            perPage
        }
    })
}