export interface INavItems {
    id: number;
    path: string;
    label: string;
}

export const navItems:INavItems[] = [
    {id:1,path: "/", label: "Home"},
    {id:2,path: "/about", label: "About"},
    {id:3,path: "/block", label: "Block"},
]

export const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const DATE = new Date()