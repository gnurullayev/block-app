import React from "react";
import Head from "next/head";
import { Box, ButtonGroup, Button, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import { BlogServices } from "src/services/blog.services";
import { IBlogsCategories } from "src/interfaces/blogs.interface";
import { useRouter } from "next/router";
import SEO from "src/layout/seo/SEO";

const CategoryPage = ({ category }: ICategory) => {
  const router = useRouter();
  return (
    <SEO metaTitle="All categories">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "900px",
            minHeight: "400px",
            padding: "20px 10px",
            backgroundColor: "rgba(0,0,0, .5)",
            borderRadius: "8px",
            boxShadow: "0px 2px 8px 6px rgba(251, 251, 251, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            className="category-title"
            variant="h3"
            component="h3"
            sx={{
              fontStyle: "italic",
              mb: "20px",
              background: "linear-gradient(to left, #00FF00 0%, #FF0000 100%",
            }}
          >
            All categories
          </Typography>
          <ButtonGroup variant="text" aria-label="text button group">
            {category.map((el) => (
              <Button
                key={el.id}
                onClick={() => router.push(`/category/${el.slug}`)}
              >
                {el.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>
    </SEO>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps<ICategory> = async () => {
  const category = await BlogServices.categories();
  return {
    props: {
      category,
    },
  };
};

interface ICategory {
  category: IBlogsCategories[];
}
