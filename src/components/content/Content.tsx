import { Box, Typography,Avatar } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { IBlogsProps } from 'src/interfaces/blogs.interface'
import { DATE, MONTHS } from 'src/config/constants'

const Content = ({blogs}: IBlogsProps) => {
  return (
    <Box sx={{color: "#fff", width: {xs: "100%", md:"60%"}}}>
      {
        blogs.map(item => (
        <Box 
        key={item.id}
        sx={{
          boxShadow: "0, 8px, 16px, rgba(255, 255, 255, 0.5)", 
          borderRadius:"8px", 
          minHeight: "350px", 
          backgroundColor: "rgba(0,0,0, .5)",
          mb:"20px",
          p:"20px"
        }}>
          <Box 
          sx={{
            minHeight: "350px",
            position: "relative"
          }}>
            <Image src={item.coverImage.url} alt={item.title} fill objectFit='cover'/>
          </Box>

          <Box sx={{py:"10px"}}>
            <Typography variant='h5' component="h5">{item.title}</Typography>
            <Typography component="p" sx={{fontSize: "14px", color: "#424242"}}>{item.excerpt}</Typography>
            <Box 
            sx={{
              borderTop: "1px solid rgba(255, 255, 255, .2)", 
              mt:"15px", 
              display:"flex", 
              alignItems: "center",
              gap:"15px"
            }}>
              <Avatar src={item.author.picture.url} alt={item.author.name} sx={{width:"40px", height:"40px"}}/>

              <Box sx={{}}>
                <Typography variant='h6' component="h6">{item.author.name}</Typography>
                <Typography component="p" sx={{fontSize: "14px", color: "#424242"}}>{`${DATE.getDay()} ${ MONTHS[DATE.getMonth()]} ${DATE.getFullYear()}`} * 10min read</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        ))
      }
    </Box>
  )
}

export default Content