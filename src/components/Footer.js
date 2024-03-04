"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Grid
        container
        sx={{
          height: "6vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fafafa",
          background: "#352b50",
          py: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
            Copy right &#169; {year} | Powered by May Thinn Khine
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
