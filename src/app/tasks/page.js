"use client";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Box, Tooltip, Typography } from "@mui/material";
import { GitHub as GitHubIcon, Code as CodeIcon } from "@mui/icons-material";
import { useEffect } from "react";

const items = [
  {
    years: " 2022 ~ Present",
    company: "Duwun",
    description:
      "I am a Senior Frontend Developer with above 6years experience in building websites for small and medium sized businesses. And also founder ofMT Coding - Tech.",
  },
  {
    years: " 2022 ~ Present",
    company: "Duwun",
    description:
      "I am a Senior Frontend Developer with above 6years experience in building websites for small and medium sized businesses. And also founder ofMT Coding - Tech.",
  },
  {
    years: " 2022 ~ Present",
    company: "Duwun",
    description:
      "I am a Senior Frontend Developer with above 6years experience in building websites for small and medium sized businesses. And also founder ofMT Coding - Tech.",
  },
];

const experiences = [
  {
    company: "Company A",
    position: "Software Engineer",
    duration: "January 2020 - Present",
    description:
      "Led the development of several key projects, resulting in a 30% increase in efficiency.",
  },
  {
    company: "Company B",
    position: "Web Developer",
    duration: "June 2017 - December 2019",
    description:
      "Designed and implemented responsive websites for various clients, utilizing HTML, CSS, and JavaScript.",
  },
];
export default function OppositeContentTimeline() {
  const A = () => {
    useEffect(() => {
      console.log("A");
    }, []);
    return <></>;
  };
  const B = () => {
    useEffect(() => {
      console.log("B");
    }, []);
    return <C />;
  };
  const C = () => {
    useEffect(() => {
      console.log("C");
    }, []);
    return <></>;
  };
  return (
    <Box id="experience" sx={{ py: 8 }}>
      <A></A>
      <B></B>
      <Timeline>
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot />
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" gutterBottom>
                  {experience.company}
                </Typography>
                <Tooltip title={experience.description} arrow>
                  <Typography variant="subtitle1" gutterBottom>
                    {experience.position}
                  </Typography>
                </Tooltip>
              </Box>
              <Typography variant="body1" color="textSecondary">
                {experience.duration}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
