import { Box } from "@mui/material";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Blog, Hero, Sidebar, Content } from "src/components";
import { IBlogs, IBlogsCategories } from "src/interfaces/blogs.interface";
import SEO from "src/layout/seo/SEO";
import { BlogServices } from "src/services/blog.services";

const BlogCategory = ({
  categoryBlogs,
  lastBlogs,
  blogsCategories,
}: IBlogCategory) => {
  const router = useRouter();
  return (
    <SEO metaTitle={`${router.query.slug} - category`}>
      <Box sx={{ minHeight: "85vh", pt: "60px" }} component="main">
        <Hero blogs={categoryBlogs} />
        <Box
          className="home__intro"
          sx={{ padding: { xs: "20px 0", sm: "40px 0" } }}
        >
          <Box className="container">
            <Box
              sx={{
                display: { xs: "flex" },
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "20px", md: "30px" },
                p: "20px 0",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  height: "800px",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <Blog blogs={lastBlogs} />
                <Sidebar blogsCategories={blogsCategories} />
              </Box>
              <Content blogs={categoryBlogs} />
            </Box>
          </Box>
        </Box>
      </Box>
    </SEO>
  );
};

export default BlogCategory;

export const getServerSideProps: GetServerSideProps<IBlogCategory> = async ({
  query,
}) => {
  const lastBlogs = await BlogServices.latestBlogs();
  const blogsCategories = await BlogServices.categories();
  const categoryBlogs = await BlogServices.getCategoryBlogs(
    query.slug as string
  );

  return {
    props: {
      lastBlogs,
      blogsCategories,
      categoryBlogs,
    },
  };
};

interface IBlogCategory {
  categoryBlogs: IBlogs[];
  lastBlogs: IBlogs[];
  blogsCategories: IBlogsCategories[];
}
