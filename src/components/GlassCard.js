"use client";
import { Box } from "@mui/material";
import React from "react";
import CustomMainSection from "./CustomMainSection";

function GlassCard() {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "80%" },
        height: { xs: "auto", sm: "85vh" },
        position: "absolute",
        zIndex: 1,
        inset: 0,
        margin: "auto",
        borderRadius: { xs: "initial", sm: "30px" },
        // backdropFilter: "blur(140px)",
        background: { xs: "transparent", sm: "rgba( 255, 255, 255, 0.25 )" },
        boxShadow: { xs: 0, sm: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )" },
        backdropFilter: "blur( 6.5px )",
        border: { xs: 0, sm: "1px solid #fff" },
        overflow: "hidden",
      }}
      // sx={{
      //   width: "80%",
      //   height: "85vh",
      //   position: "absolute",
      //   zIndex: 1,
      //   inset: 0,
      //   margin: "auto",
      //   borderRadius: { xs: "initial", sm: "30px" },
      //   background: " rgba(255, 255, 255, 0.25)",
      //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      //   backdropFilter: "blur( 6.5px )",
      //   border: "1px solid #fff",
      //   overflow: "hidden",
      // }}
    >
      <Box>
        <CustomMainSection />
      </Box>
    </Box>
  );
}

export default GlassCard;
