import { request, gql } from 'graphql-request'
import { Gwendolyn } from 'next/font/google';
import { IBlogDetail, IBlogs, IBlogsCategories, ICategoryBlogs } from 'src/interfaces/blogs.interface';
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

    const result = await request<{categories:IBlogsCategories[]}>(graphqlApi, query)    
    
    return result.categories
  },

  async blogDetail (slug: string) {
    
    const query = gql`
      query blogDetail($slug: String!) {
        post(where: {slug: $slug}) {
          date
          excerpt
          id
          slug
          seo {
            image {
              url
            }
          }
          title
          updatedAt
          createdAt
          coverImage {
            url
          }
          content {
            text
            html
          }
          category {
            label
            slug
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

    const result = await request<{post:IBlogDetail}>(graphqlApi, query, { slug })   
    return result.post
  },

  async getCategoryBlogs (slug:string) {
    const query = gql`
    query categoryBlogs($slug:String!) {
      posts(where: {category: {slug: $slug}}) {
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
        category {
          label
          slug
        }
      }
    }
    `

    const result = await request<{posts:IBlogs[]}>(graphqlApi, query, {slug})
    return result.posts
  }
}