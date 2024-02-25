import { Box, Icon, Typography } from "@mui/material";
import React from "react";

function IconWithText({ icon, text }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
      {/* <MailIcon sx={{ fontSize: 16, mr: 0.5 }} /> */}
      <Icon sx={{ fontSize: 16, mr: 0.8 }}>{icon}</Icon>
      <Typography variant="caption" sx={{ textAlign: "left" }}>
        {text}
      </Typography>
    </Box>
  );
}

export default IconWithText;
