import React from "react";
import Image from "next/image";
import { Avatar, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IBlogsProps } from "src/interfaces/blogs.interface";
import { DATE, MONTHS } from "src/config/constants";
import { readingTime } from "src/helpers/calculateEstimatedReading";
import { useRouter } from "next/router";

const Hero = ({ blogs }: IBlogsProps) => {
  const router = useRouter();
  return (
    <Box
      component="div"
      className="hero"
      style={{ backgroundColor: "#070724" }}
    >
      <Box className="" style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <Box component="div">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >
            {blogs.map((item) => (
              <SwiperSlide
                key={item.id}
                className="compatriots-events__slider-list"
              >
                <Box
                  component="div"
                  style={{
                    width: "100%",
                    height: "400px",
                    position: "relative",
                    cursor: "pointer",
                  }}
                  onClick={() => router.push(`/blog/${item.slug}`)}
                >
                  <Image
                    src={item.coverImage.url}
                    alt={item.title}
                    fill
                    objectFit="cover"
                  />

                  <Box
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "40px",
                      color: "#fff",
                    }}
                  >
                    <Typography variant="h3" component="h3">
                      {item.title}
                    </Typography>
                    <Typography variant="h5" component="p">
                      {item.excerpt}
                    </Typography>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "30px",
                      }}
                    >
                      <Avatar
                        alt={item.author.name}
                        src={item.author.picture.url}
                      />
                      <Box>
                        <Typography component="p">
                          {item.author.name}
                        </Typography>
                        <Typography component="b">
                          {`${DATE.getDay()} ${
                            MONTHS[DATE.getMonth()]
                          } ${DATE.getFullYear()}`}{" "}
                          * {readingTime(item.content.text)} min red
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
