import { request, gql } from 'graphql-request'
import { IBlogs } from 'src/interfaces/blogs.interface';
const graphqlApi = <string>process.env.NEXT_PUBLIC_HYGRAPH_ENDPOIND
interface IGetBlogs {
    posts: IBlogs[];
}

export const BlogServices = {
    async getBlogs () {
        const query = gql` 
        query getBlogs {
            posts {
              id
              slug
              title
              excerpt
              date
              createdAt
              coverImage {
                url
              }
              author {
                name
                picture {
                  url
                }
              }
              content {
                text
              }
            }
          }
        `;

        const result = await request<IGetBlogs>(graphqlApi, query)
            
        return result.posts
    }
}