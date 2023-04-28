import { Box } from "@mui/material";
import Head from "next/head";
import { Blog, Content, Hero, Sidebar } from "src/components";
import { BlogServices } from "src/services/blog.services";
import { IBlogs, IBlogsCategories } from "src/interfaces/blogs.interface";
import { GetServerSideProps } from "next";
import SEO from "src/layout/seo/SEO";

export default function Home({
  posts,
  lastBlogs,
  blogsCategories,
}: IHomeProps) {
  return (
    <SEO>
      <Box sx={{ minHeight: "85vh", pt: "60px" }} component="main">
        <Hero blogs={posts} />
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
              <Content blogs={posts} />
            </Box>
          </Box>
        </Box>
      </Box>
    </SEO>
  );
}
interface IHomeProps {
  posts: IBlogs[];
  lastBlogs: IBlogs[];
  blogsCategories: IBlogsCategories[];
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const posts = await BlogServices.getBlogs();
  const lastBlogs = await BlogServices.latestBlogs();
  const blogsCategories = await BlogServices.categories();

  return {
    props: {
      posts,
      lastBlogs,
      blogsCategories,
    },
  };
};
