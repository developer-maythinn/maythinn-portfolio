"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Grid } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "./Link";
import { motion, useScroll } from "framer-motion";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function CustomAppBar(props) {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: "transparent", border: "0" }} elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div">
              {/* Scroll to hide App bar */}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box>
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ p: 6, pr: "47px" }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: "500", fontSize: 16 }}
              >
                Hello, my name is
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                className={styles.name}
                sx={{ pt: 1 }}
              >
                May Thinn Khine
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ lineHeight: "28px", pt: 1 }}
              >
                I’m a Senior Frontend Developer with above 6years experience in
                building websites for small and medium sized businesses. And
                also founder of
                <Link
                  target="_blank"
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    pl: 1,
                    textDecoration: "none",
                    color: "#614a9e",
                  }}
                  href="https://www.facebook.com/profile.php?id=100078891341055"
                >
                  MT Coding - Tech
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Image
              src="/girl.png"
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw"
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />{" "}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
