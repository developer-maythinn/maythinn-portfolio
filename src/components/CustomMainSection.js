"use client";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
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
  return (
    <React.Fragment>
      <MyAppBar />
      <Box
        sx={{
          height: { xs: "95vh", sm: "74vh" },
          display: "flex",
          alignItems: "center",
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
              <Typography
                variant="subtitle1"
                component="p"
                sx={{ lineHeight: "28px", pt: 1, textIndent: 30, fontSize: 14 }}
              >
                I am a Senior Frontend Developer with over 6 years experience in
                building websites using with{" "}
                <TypoLang component="span">React js</TypoLang> and{" "}
                <TypoLang component="span">Next js</TypoLang> . And also a
                founder of
                <Link
                  target="_blank"
                  sx={{
                    fontSize: 16,
                    fontWeight: "700",
                    pl: 1,
                    textDecoration: "none",
                    color: "#856cc9",
                  }}
                  href="https://www.facebook.com/profile.php?id=100078891341055"
                >
                  MT Coding - Tech
                </Link>
                . Let's collaborate and create exceptional digital experiences
                together.
              </Typography>
              {/* **************** for social ********************** */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <SocialComponent />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: { xs: "85vw", sm: "54vw", md: "100%" },
                height: "auto",
                margin: "auto",
              }}
            >
              <Image
                src="/girl.png"
                layout="responsive"
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw"
                alt="Picture of the author"
                // style={{
                //   objectFit: "contain",
                //   // height: "fit-content",
                //   // width: "100%",
                // }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
