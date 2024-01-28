import { Box, Typography } from "@mui/material";
import React from "react";

function SectionTitle() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="caption">Why Choose me</Typography>
      <Typography variant="h5" sx={{ fontWeight: "700" }}>
        My Expertise Area
      </Typography>
    </Box>
  );
}

export default SectionTitle;
