"use client";
import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import PropTypes from "prop-types";
import * as React from "react";
import Link from "./Link";
import MyAppBar from "./MyAppbar";
import SocialComponent from "./SocialComponent";
import styles from "./styles.module.css";

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
const TypoLang = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "inline",
  fontWeight: "500",
}));
export default function CustomMainSection(props) {
  const handleClick = async () => {
    const response = await fetch("/api/file");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "filename.txt";
    link.click();
  };
  return (
    <React.Fragment>
      <MyAppBar />
      <Box
        sx={{
          height: { xs: "95vh", sm: "74vh" },
          display: "flex",
          alignItems: "center",
          // zIndex: 9999,
          position: "relative",
        }}
      >
        <Grid
          container
          sx={{
            mt: { xs: 0, sm: 3 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                p: {
                  xs: 2,
                  md: 6,
                },
                pr: {
                  xs: 2,
                  md: "47px",
                },
                textAlign: {
                  xs: "center", // Default value for extra-small screens
                  md: "left", // Centered text for medium screens and larger
                },
              }}
            >
              <Typography
                variant="h6"
                component="h3"
                sx={{ fontWeight: "500", fontSize: 14, fontWeight: 700 }}
              >
                Hello, my name is
              </Typography>
              <Typography
                variant="h4"
                component="h1"
                className={styles.name}
                sx={{ pt: 1, fontSize: { xs: "1.8rem", sm: "3rem" } }}
              >
                May Thinn Khine
              </Typography>
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    component="h1"
                    sx={{ pt: 1, fontSize: { xs: "1.1rem", sm: "1.3rem" } }}
                    //
                  >
                    Senior Frontend Developer
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    component="h1"
                    sx={{
                      pt: 1,
                      // fontSize: { xs: "0.8rem", sm: "1rem" },
                    }}
                  >
                    React JS | Next JS
                  </Typography>
                </Grid>
              </Grid>

              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button variant="contained">
                  <a
                    href={"/May-Thinn-Khine-SFD-2025.pdf"}
                    style={{ color: "inherit", textDecoration: "none" }}
                    download
                  >
                    Download CV
                  </a>
                </Button>

                {/* <SocialComponent /> */}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: "800px",
                height: "350px",
              }}
            >
              <Image
                src={"/girl.png"}
                alt="Picture of the author"
                sizes="500px"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
