"use client";
import React from "react";
import ParentSection from "./ParentSection";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "./Link";
import SocialComponent from "./SocialComponent";
import styles from "./styles.module.css";
import styled from "@emotion/styled";
import IconWithText from "./IconWithText";
const TypoLang = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: "inline",
  fontWeight: "500",
}));
function About() {
  return (
    <Box sx={{ position: "relative" }}>
      <ParentSection
        caption={"About Me and Education"}
        title={"About Me"}
        customTitleStyles={{
          mb: { xs: 6, sm: 0 },
        }}
        id="about"
      >
        <Box
          sx={{
            height: { xs: "100vh", sm: "60vh" },
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
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
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 228,
                  height: 250,
                  background: "linear-gradient(45deg, #856cc9, transparent)",
                  borderRadius: "66% 34% 34% 66% / 65% 29% 71% 35%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "230px",
                    height: "250px",
                    overflow: "hidden",
                    top: "19px",
                    left: "-44px",
                  }}
                >
                  <Image
                    src={"/images/May-Thinn-Khine-transparent.png"}
                    alt="Picture of the author"
                    sizes="500px"
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Box>
            </Grid>
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
                  mt: {
                    xs: 2,
                  },
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  className={styles.name}
                  sx={{
                    pt: 1,
                    fontSize: { xs: "1.8rem", sm: "3rem" },
                  }}
                >
                  May Thinn Khine
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    lineHeight: "28px",
                    pt: 2,
                    // textIndent: 30,
                    fontSize: 14,
                    textAlign: "left",
                  }}
                >
                  I am a Senior Frontend Developer with 8 years experience in
                  building websites using with{" "}
                  <TypoLang component="span">React js</TypoLang> and{" "}
                  <TypoLang component="span">Next js</TypoLang>. And also a
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
                    mt: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <IconWithText
                    icon="school"
                    text="Bachelor of Arts (West Yangon University)"
                  />

                  <IconWithText
                    icon="school"
                    text="Certified Software Engineering Fundamental Course (Fairway Technology)"
                  />
                  <IconWithText
                    icon="school"
                    text="Certified Rockstar Developer Course (Fairway Technology)"
                  />
                  <IconWithText
                    icon="school"
                    text="Certified Professional Web development class (Brighter Myanmar)"
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ParentSection>
      <ul className="bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Box>
  );
}

export default About;
