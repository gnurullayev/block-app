export interface INavItems {
    id: number;
    path: string;
    label: string;
}

export const navItems:INavItems[] = [
    {id:1,path: "/", label: "Home"},
    {id:2,path: "/category", label: "Category"},
    {id:3,path: "/blog", label: "Blog"},
]

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const DATE = new Date()