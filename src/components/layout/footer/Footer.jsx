import React from "react";
import { Box, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box component="footer" style={{ backgroundColor: "#1b1d2b" }}>
      <Box className="container" component="div">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px 0",
          }}
          component="div"
        >
          <Typography sx={{ color: "#fff" }} variant="h6" component={"p"}>
            © {new Date().getFullYear()} Blog sahifa
          </Typography>

          <Box
            component="ul"
            sx={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <Box component="li">
              <TelegramIcon style={{ fontSize: "30px", color: "green" }} />
            </Box>

            <Box component="li">
              <InstagramIcon style={{ fontSize: "30px", color: "green" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
