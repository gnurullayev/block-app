import React from 'react'
import {Box,Typography, List,Avatar} from "@mui/material"

import Image from 'next/image'
import {IBlogsProps } from 'src/interfaces/blogs.interface'
import { DATE, MONTHS } from 'src/config/constants'


const Blog = ({blogs}: IBlogsProps) => {
    
  return (
    <Box sx={{width: {xs: "100%"},mb: "30px", border: "1px solid rgba(255, 255, 255, .2)", borderRadius: "8px", padding:"10px 5px"}} >
        <Typography variant='h5' component="p" sx={{color:"#fff", mb: "20px"}}>Latest blog</Typography>
        <List component="nav" aria-label="secondary mailbox folder" style={{color:"#fff"}}>
            {
                blogs.map(item => (
                    <Box key = {item.id} sx={{display: "flex", gap:"15px", padding: "10px 0", borderBottom: "1px solid rgba(255, 255, 255, .2)"}}>
                        <Image src={item.coverImage.url} alt={item.title} width={100} height={90}  objectFit='contain'/>
                        <Box>
                            <Typography component="p" sx={{fontSize: "15px", mb: "2px"}}>{item.title}</Typography>
                           <Box sx={{display: "flex", alignItems: "center", gap: "10px"}}>
                                <Avatar alt={item.author.name} src={item.author.picture.url} sx={{width: "40px", height: "40px"}}/>
                                <Box >
                                    <Typography component="span" sx={{fontSize: "12px"}}>{item.author.name}</Typography>
                                    <Typography component="span" sx={{fontSize: "12px", display:"block"}}>{`${DATE.getDay()} ${ MONTHS[DATE.getMonth()]} ${DATE.getFullYear()}`}</Typography>
                                </Box>
                           </Box>
                        </Box>
                    </Box>
                ))
            }
        </List>
    </Box>
  )
}

export default Blog