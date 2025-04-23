import { Box, Container, Grid, Typography } from "@mui/material";
import ParentSection from "./ParentSection";
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
      language: "TypeScript",
      percent: "80",
    },
    {
      language: "Tailwind CSS",
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
      language: "Node JS",
      percent: "80",
    },
    {
      language: "PostgreSQL",
      percent: "70",
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
      language: "HTML/CSS",
      percent: "90",
    },

    {
      language: "SASS",
      percent: "70",
    },
    {
      language: "Other UI(Bootstrap, etc)",
      percent: "70",
    },
    {
      language: "Git",
      percent: "70",
    },
  ];
  return (
    <>
      <ParentSection
        caption={"Technical level"}
        title={"My Expertise Area"}
        id="skills"
      >
        <Grid
          container
          sx={{
            mt: 6,
            position: "relative",
            zIndex: 999,
            background: "linear-gradient(to top, #fff 70%, transparent)",
          }}
          spacing={3}
        >
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
      </ParentSection>
    </>
  );
}

export default SkillSection;
