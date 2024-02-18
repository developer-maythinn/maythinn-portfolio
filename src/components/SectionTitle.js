import { Box, Typography } from "@mui/material";
import React from "react";

function SectionTitle({ title, caption, customTitleStyles }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="caption" sx={{ ...customTitleStyles }}>
        {caption}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "700", ...customTitleStyles }}>
        {title}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
