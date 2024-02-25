"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SocialComponent from "./SocialComponent";
import MailIcon from "@mui/icons-material/Mail";
import IconWithText from "./IconWithText";
import Image from "next/image";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <>
      <Grid
        container
        sx={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fafafa",
          background: "#4f4078",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "20vw", sm: "14vw", md: "8vw" },
              height: { xs: "20vw", sm: "14vw", md: "8vw" },
              margin: "auto",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              mb: 2,
            }}
          >
            <Image
              src="/images/May-Thinn-Khine.jpeg"
              fill
              alt="Picture of the author"
              sizes="500px"
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Get in touch
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 1, mb: 2 }}
          >
            Let's Collaborate: Excited to work together? <br></br> Get in touch
            and let's make it happen!
          </Typography>

          <IconWithText icon="mail" text="developer.maythinn@gmail.com" />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <SocialComponent></SocialComponent>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          height: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fafafa",
          background: "#352b50",
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
