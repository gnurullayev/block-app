import { Avatar, Box, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import { Blog, Sidebar } from "src/components";
import { DATE, MONTHS } from "src/config/constants";
import { readingTime } from "src/helpers/calculateEstimatedReading";
import {
  IBlogDetail,
  IBlogs,
  IBlogsCategories,
} from "src/interfaces/blogs.interface";
import { BlogServices } from "src/services/blog.services";
import DOMPurify from "dompurify";
import Head from "next/head";
import SEO from "src/layout/seo/SEO";
import { useRouter } from "next/router";

const BlogDetail = ({ blog, lastBlogs, blogsCategories }: IBlogDetailProps) => {
  const router = useRouter();
  return (
    <SEO metaTitle={`${router.query.slug} - blog`}>
      <Box sx={{ minHeight: "85vh", pt: "80px", pb: "30px", color: "#fff" }}>
        <Box className="container">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "4%",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ width: "68%" }}>
              <Box
                sx={{
                  boxShadow: "7px 10px 15px -5px  rgba(255, 255, 255, 0.5)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  height: "400px",
                  width: "100%",
                  position: "relative",
                }}
              >
                <Image src={blog.coverImage.url} alt="Ronak Ganatra" fill />
              </Box>
              <Box sx={{ py: "20px" }}>
                <Box
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Avatar
                    alt={blog.author.name}
                    src={blog.author.picture.url}
                    style={{ width: "70px", height: "70px" }}
                  />
                  <Box>
                    <Typography component="p">{blog.author.name}</Typography>
                    <Typography component="b">
                      {`${DATE.getDay()} ${
                        MONTHS[DATE.getMonth()]
                      } ${DATE.getFullYear()}`}{" "}
                      * {readingTime(blog.content.text)} min red
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h4" component="h4" sx={{ mt: "20px" }}>
                  {blog.title}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ fontSize: "14px", color: "rgba(255, 255, 255, .5)" }}
                >
                  {blog.excerpt}
                </Typography>
                <Box sx={{ py: "15px" }}>
                  <div
                    style={{ opacity: ".9" }}
                    dangerouslySetInnerHTML={{ __html: blog.content.html }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: "28%" }}>
              <Blog blogs={lastBlogs} />
              <Sidebar blogsCategories={blogsCategories} />
            </Box>
          </Box>
        </Box>
      </Box>
    </SEO>
  );
};

export default BlogDetail;

export const getServerSideProps: GetServerSideProps<IBlogDetailProps> = async ({
  query,
}) => {
  const blog = await BlogServices.blogDetail(query.slug as string);
  const lastBlogs = await BlogServices.latestBlogs();
  const blogsCategories = await BlogServices.categories();
  return {
    props: {
      blog,
      lastBlogs,
      blogsCategories,
    },
  };
};

interface IBlogDetailProps {
  blog: IBlogDetail;
  lastBlogs: IBlogs[];
  blogsCategories: IBlogsCategories[];
}
