export interface IBlogs {
    id:string;
    slug:string;
    title:string;
    excerpt:string;
    date:string;
    createdAt:string;
    coverImage: {
        url:string;
    }
    author: {
        name:string;
        picture: {
            url:string
        }
    }
    content: {
        text:string;
    }
}

export interface IBlogDetail {
    date:string;
    excerpt:string;
    id:string;
    slug:string;
    seo: {
      image: {
        url:string;
      }
    }
    title:string;
    updatedAt:string;
    createdAt:string;
    coverImage: {
      url:string;
    }
    content:{
      text:string;
      html:string;
    }
    category: {
      label:string;
      slug:string;
    }
    author: {
        name:string;
        picture: {
          url:string;
        }
      }
}
export interface ICategoryBlogs {
  date:string;
  excerpt:string;
  id:string;
  author: {
    name:string;
    picture: {
      url:string;
    }
  }
  content: {
    text:string;
    html:string;
  }
  title:string;
}

export interface IBlogsCategories {
    id:string;
    label:string;
    slug:string;
}

export interface IBlogsProps {
    blogs: IBlogs[];
}