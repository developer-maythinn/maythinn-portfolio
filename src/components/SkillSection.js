import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ProgressBarComponent } from "./ProgressBarComponent";
import SectionTitle from "./SectionTitle";

function SkillSection() {
  const skills = [
    {
      language: "React JS",
      percent: "85",
    },
    {
      language: "Next JS",
      percent: "85",
    },
    {
      language: "Material UI",
      percent: "90",
    },
    {
      language: "Token Base UI (Design Token) ",
      percent: "85",
    },
    {
      language: "React Native",
      percent: "50",
    },
    {
      language: "Vue",
      percent: "50",
    },
    {
      language: "javascript",
      percent: "80",
    },
    {
      language: "JQuery",
      percent: "50",
    },

    {
      language: "HTML",
      percent: "90",
    },
    {
      language: "CSS",
      percent: "90",
    },
    {
      language: "SASS",
      percent: "70",
    },
    {
      language: "Other UI(Bootstrap, etc)",
      percent: "80",
    },
  ];
  return (
    <>
      <Container>
        <Box
          sx={{
            width: "100%",
            height: "fit-content",
            py: 8,
            px: 2,
          }}
        >
          <SectionTitle></SectionTitle>
          <Grid container sx={{ mt: 6 }} spacing={3}>
            {skills &&
              skills.length > 0 &&
              skills.map((skill, index) => {
                return (
                  <Grid item xs={12} sm={6} key={index}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {skill.language}
                    </Typography>
                    <ProgressBarComponent
                      value={skill.percent}
                      showPercent={true}
                      percentPosition={"end"}
                      barHeight={1}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default SkillSection;
