import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { Box } from "@mui/material";
import { Content } from "src/components";
import { IBlogs } from "src/interfaces/blogs.interface";
import { BlogServices } from "src/services/blog.services";
import SEO from "src/layout/seo/SEO";

const BlogPage = ({ blogs }: IBlogsPage) => {
  return (
    <SEO metaTitle="All blogs">
      <Box sx={{ display: "flex", justifyContent: "center", py: "80px" }}>
        <Content blogs={blogs} />
      </Box>
    </SEO>
  );
};

export default BlogPage;

export const getServerSideProps: GetServerSideProps<IBlogsPage> = async () => {
  const blogs = await BlogServices.getBlogs();

  return {
    props: {
      blogs,
    },
  };
};

interface IBlogsPage {
  blogs: IBlogs[];
}
