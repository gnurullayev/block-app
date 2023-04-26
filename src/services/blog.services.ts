import { request, gql } from 'graphql-request'
import { IBlogs, IBlogsCategories } from 'src/interfaces/blogs.interface';
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
  },

  async latestBlogs() {
    const query = gql`
      query latestBlogs {
        posts(last: 3) {
          id
          excerpt
          slug
          title
          date
          createdAt
          coverImage {
            url
          }
          content {
            text
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    `

    const result = await request<IGetBlogs>(graphqlApi, query)  
    console.log(result);  
    return result.posts
  },

  async categories() {
    const query = gql`
    query categories {
      categories {
        id
        label
        slug
      }
    }
    `
    await request(graphqlApi, query).then(res => console.log(res))  

    const result = await request<{categories:IBlogsCategories[]}>(graphqlApi, query)    
    
    return result.categories
  }
}