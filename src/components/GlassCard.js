"use client";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomAppBar from "./CustomAppbar";

function GlassCard() {
  return (
    <Box
      sx={{
        width: "80%",
        height: "85vh",
        background: "rgba(#fff,0.8)",
        position: "absolute",
        zIndex: 1,
        inset: 0,
        margin: "auto",
        borderRadius: "30px",
        backdropFilter: "blur(140px)",
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 6.5px )",
        border: "1px solid #fff",
        overflow: "hidden",
      }}
    >
      <CustomAppBar />
    </Box>
  );
}

export default GlassCard;
