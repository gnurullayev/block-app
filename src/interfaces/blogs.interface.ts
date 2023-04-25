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

export interface IBlogsCategories {
    id:string;
    label:string;
    slug:string;
}

export interface IBlogsProps {
    blogs: IBlogs[]
}