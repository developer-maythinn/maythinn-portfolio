import { Typography } from "@mui/material";
import React from "react";

function MainTitle({ title, customStyles }) {
  return (
    <>
      {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}

      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 900,
          // letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          textTransform: "uppercase",
          ...customStyles,
        }}
      >
        {title}
      </Typography>
    </>
  );
}

export default MainTitle;
