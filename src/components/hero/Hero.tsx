import React from 'react'
import Image from 'next/image';
import { Avatar, Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IBlogsProps } from 'src/interfaces/blogs.interface';
import { DATE, MONTHS } from 'src/config/constants';

const Hero = ({blogs}:IBlogsProps) => {
    
  return (
    <Box component="div" className='hero' style={{backgroundColor: "#070724"}}>
        <Box className="" style={{maxWidth: "1400px", margin: "0 auto"}}>
            <Box component="div">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    modules={[Navigation]}
                    breakpoints={{
                    0: {
                        slidesPerView: 1,
                    }}}
                    className="mySwiper"
                >
                    {blogs.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className="compatriots-events__slider-list"
                    >
                        <Box component="div" style={{width:"100%", height:"400px", position:"relative"}}>
                            <Image src={item.coverImage.url} alt={item.title} fill style={{objectFit: "cover"}}/>

                            <Box style={{position: "absolute", bottom: "20px", left: "40px", color: "#fff"}}>
                                <Typography variant='h3' component="h3">{item.title}</Typography>
                                <Typography variant='h5' component="p">{item.excerpt}</Typography>
                                <Box style={{display: "flex", alignItems: "center", gap: "30px" }}>
                                    <Avatar alt={item.author.name} src={item.author.picture.url} />
                                    <Box>
                                        <Typography component="p">{item.author.name}</Typography>
                                        <Typography component="b">{`${DATE.getDay()} ${ MONTHS[DATE.getMonth()]} ${DATE.getFullYear()}`} * 1 min red</Typography>
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
  )
}

export default Hero

export const data = [
	{
        id: 1,
		image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
		title: 'Technical SEO with Hygraph',
		exerpt: 'Get started with your SEO implementation when using a Headless CMS',
		author: {
			name: 'Alisher Usmonov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
	{
        id:2,
		image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
		title: 'Union Types and Sortable Relations with Hygraph',
		exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
		author: {
			name: 'Alisher Usmonov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
];