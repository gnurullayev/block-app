import { Box, List, ListItemButton, ListItemText,Typography } from '@mui/material'
import React from 'react'
import { ISidebarProps } from './sidebar.props'

const Sidebar = ({blogsCategories}:ISidebarProps) => {
  return (
    <Box sx={{width: {xs: "100%",}, border: "1px solid rgba(255, 255, 255, .2)", borderRadius: "8px", padding:"10px 5px"}} >
        <Typography variant='h5' component="p" style={{color:"#fff"}}>Category</Typography>
        <List component="nav" aria-label="secondary mailbox folder" style={{color:"rgb(102, 157, 246)"}}>
            {
                blogsCategories.map(item => (
                    <ListItemButton key={item.id} sx={{padding: "10px 0", borderBottom: "1px solid rgba(255, 255, 255, .2)"}}>
                        <ListItemText primary={item.label} color='primary'/>
                    </ListItemButton>
                ))
            }
        </List>
    </Box>
  )
}

export default Sidebar