import BackgroundCircles from "@/components/BackgroundCircles";
import ExperienceSection from "@/components/ExperienceSection";
import GlassCard from "@/components/GlassCard";
import ProjectsSection from "@/components/ProjectsSection";
import SkillSection from "@/components/SkillSection";
import { Box, Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as React from "react";
import { ScrollTop } from "@/components/ScrollTop";

function page(props) {
  return (
    <>
      <Box
        id="back-to-top-anchor"
        sx={{ width: "100%", height: "100vh", position: "relative" }}
      >
        <BackgroundCircles />
        <GlassCard />
      </Box>
      <SkillSection></SkillSection>

      <Box
        sx={{
          position: "relative",
        }}
      >
        <div className="custom-shape-divider-bottom-1708198882">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <ExperienceSection />
      </Box>
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(to bottom, #856cc9, transparent)",
        }}
      >
        <ProjectsSection></ProjectsSection>
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default page;
