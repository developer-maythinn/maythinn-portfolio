"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { GitHub as GitHubIcon, Code as CodeIcon } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import SectionTitle from "./SectionTitle";
import ParentSection from "./ParentSection";

const items = [
  {
    years: "2022 ~ Present",
    company: "ONOW MYANMAR",
    position: "Senior Frontend Developer",
    description:
      "I am currently employed at ONOW MYANMAR, where I serve as a Senior Frontend Developer. In this capacity, I have taken the lead on two projects, leveraging my expertise to drive their successful execution and delivery.",
    // "During my tenure at ONOW MYANMAR from 2022 to present. Throughout this period, I played a pivotal role in the development of two significant projects: Progressive Web App (PWA) and a Content Management System (CMS).",
    imgSrc: "/company/App-bar-ONOW-Logo.svg",
  },

  {
    years: "2017 ~ 2021",
    company: "IM Ringier Co., Ltd. (Duwun Media)",
    position: "Senior Frontend Developer",
    description:
      "During my tenure at IM Ringier Co., Ltd from 2018 to 2022, I advanced from the position of Web Designer to Senior Frontend Developer. Throughout this period, I played a pivotal role in the development of two significant projects: a production-level website and the beta version of a Progressive Web App (PWA).",
    imgSrc: "/company/DuwunLogoWhite.svg",
    bgColor: orange[800],
  },
  {
    years: "2021 ~ Present",
    company: "MT Coding - Tech",
    position: "Founder/Instructor",
    description:
      "As the founder and lead instructor of MT Coding - Tech, I have had the privilege of guiding numerous students through our programs. The positive feedback received from these students underscores the effectiveness of our teaching methods and the value of the education they receive.",
    imgSrc: "/company/mt-coding-tech.jpeg",
    bgColor: "#18132f",
  },
];
export default function ExperienceSection() {
  //
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const timelinePosition = isSmallScreen ? "right" : "alternate";

  return (
    <ParentSection caption={"Why Choose me"} title={"My Work Experience"}>
      <Grid container sx={{ my: 6 }}>
        <Grid item>
          <Timeline position={timelinePosition}>
            {items &&
              items.map((item, index) => {
                return (
                  <TimelineItem key={index}>
                    {console.log("isSmallScreen", isSmallScreen)}
                    {!isSmallScreen ? (
                      <TimelineOppositeContent>
                        <Typography variant="subtitle2" sx={{ mt: 2.5 }}>
                          {item.years}
                        </Typography>
                      </TimelineOppositeContent>
                    ) : null}
                    <TimelineSeparator>
                      <TimelineDot
                        sx={{
                          width: 50,
                          height: 50,
                          // p: 1,
                          background: item.bgColor || "white",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={item.imgSrc}
                          layout="responsive"
                          width={50}
                          height={50}
                          // sizes="(max-width: 768px) 100vw"
                          alt="Picture of the author"
                        />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        variant="h6"
                        sx={{ color: "#856cc9", fontWeight: 600 }}
                      >
                        {item.company}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 500, mb: 0.5 }}
                      >
                        {item.position}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{ mt: 2.5, display: { sm: "none" } }}
                      >
                        {item.years}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ lineHeight: 1.6, textAlign: "left" }}
                      >
                        {item.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
          </Timeline>
        </Grid>
      </Grid>
    </ParentSection>
  );
}
