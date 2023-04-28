import React from 'react'
import Link from 'next/link';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { INavItems, navItems } from 'src/config/constants';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./navbar.module.css"

interface ParentCompProps {
    handleDrawerToggle(): void;
    window?: () => Window;
    mobileOpen: boolean;
}

const Navbar = (props:ParentCompProps) => {
    const {mobileOpen,handleDrawerToggle,window} = props

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <Box className={styles.nav}>
            <Box sx={{display: "flex", alignItems: "center", gap:"5px"}}>
              <AccountBalanceIcon/>

              <Typography variant="h6" sx={{ my: 2, color: "green" }}>
                Blog
              </Typography>
            </Box>

            <CloseIcon/>
          </Box>
          <Divider />
          <List>
            {navItems.map((item:INavItems) => (
                <Link href={item.path} key={item.id} style={{color: "#000", textDecoration: "none"}}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                </Link>
            ))}
          </List>
        </Box>
      );
    
      const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box component="nav">
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%" },
      }}
    >
      {drawer}
    </Drawer>
  </Box>
  )
}

export default Navbar