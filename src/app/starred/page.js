import React from "react";
import {
  Box,
  Typography,
  Tooltip,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/material";
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
const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Experience
      </Typography>
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
};

export default Experience;
