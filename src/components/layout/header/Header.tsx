import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { INavItems, navItems } from "src/config/constants";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Link from "next/link";
import Navbar from "src/components/navbar/Navbar";


const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "rgba(0,0,0, .5)"}} component="header">
      <AppBar component="nav" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{display: { xs: "none", sm: "flex" }, alignItems: "center", gap:"5px",flexGrow: 1, }}>
            <AccountBalanceIcon/>

            <Typography  variant="h6" component="div" sx={{ my: 2, color: "#fff", fontWeight: "900"}}>
              Blog
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: "#fff" }}>
                <Link href={item.path} style={{color: "#fff", textDecoration: "none"}}>
                  {item.label} 
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Navbar mobileOpen={mobileOpen} handleDrawerToggle={ handleDrawerToggle }/>
    </Box>
  );
};

export default Header;
