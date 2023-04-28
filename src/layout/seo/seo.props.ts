import { ReactNode } from "react";

export interface ISeoProps {
    children: ReactNode;
    metaTitle?: string;
    metaDescription?: string;
    author?: string;
    metaKeywords?: string;
}