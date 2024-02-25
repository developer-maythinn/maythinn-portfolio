import { Box, Icon, Typography } from "@mui/material";
import React from "react";

function IconWithText({ icon, text }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {/* <MailIcon sx={{ fontSize: 16, mr: 0.5 }} /> */}
      <Icon sx={{ fontSize: 16, mr: 0.5 }}>{icon}</Icon>
      <Typography variant="caption">{text}</Typography>
    </Box>
  );
}

export default IconWithText;
