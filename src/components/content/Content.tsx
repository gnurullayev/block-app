import { Box, Typography,Avatar } from '@mui/material'
import React from 'react'
import { data } from '../hero/Hero'
import Image from 'next/image'

const Content = () => {
  return (
    <Box sx={{color: "#fff", width: {xs: "100%", md:"60%"}}}>
      {
        data.map(item => (
        <Box 
        key={item.id}
        sx={{
          boxShadow: "0, 8px, 16px, rgba(255, 255, 255, 0.5)", 
          borderRadius:"8px", 
          minHeight: "350px", 
          backgroundColor: "rgba(0,0,0, .5)",
          border: "1px solid rgba(255, 255, 255, .2)",
          mb:"20px",
        }}>
          <Box 
          sx={{
            minHeight: "350px",
            position: "relative"
          }}>
            <Image src={item.image} alt={item.title} fill objectFit='cover'/>
          </Box>

          <Box sx={{p:"10px"}}>
            <Typography variant='h5' component="h5">{item.title}</Typography>
            <Typography component="p" sx={{fontSize: "14px", color: "#424242"}}>{item.exerpt}</Typography>
            <Box 
            sx={{
              borderTop: "1px solid rgba(255, 255, 255, .2)", 
              mt:"15px", 
              display:"flex", 
              alignItems: "center",
              gap:"15px"
            }}>
              <Avatar src={item.author.image} alt={item.author.name} sx={{width:"40px", height:"40px"}}/>

              <Box sx={{}}>
                <Typography variant='h6' component="h6">{item.author.name}</Typography>
                <Typography component="p" sx={{fontSize: "14px", color: "#424242"}}>12may 2023 * 10min read</Typography>
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