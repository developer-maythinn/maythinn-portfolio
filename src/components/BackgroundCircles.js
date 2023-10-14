"use client";
import { Box } from "@mui/material";
import React from "react";
import { circleStyles } from "./styles/commonStyles";

function BackgroundCircles() {
  return (
    <>
      {/* <Box sx={{ width: "100%", height: "100vh" }}>
        <Box
          sx={{
            ...circleStyles(
              "100%",
              "100%",
              "url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              { backgroundSize: "cover" }
            ),
          }}
        ></Box>
      </Box> */}
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Box
          sx={{
            ...circleStyles(
              "50%",
              "50%",
              //   "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
              "linear-gradient(45deg,hsl(240deg 61% 76%) 0%,hsl(273deg 66% 76%) 11%,hsl(308deg 72% 75%) 22%,hsl(325deg 100% 78%) 33%,hsl(338deg 100% 77%) 44%,hsl(358deg 100% 79%) 56%,hsl(20deg 100% 73%) 67%,hsl(36deg 100% 66%) 78%,hsl(47deg 100% 58%) 89%,hsl(55deg 100% 50%) 100%)",
              "blur(120px)"
            ),
          }}
        ></Box>
        <Box
          sx={{
            ...circleStyles(
              "30%",
              "50%",
              "#66E5EE",
              //   " linear-gradient(120deg,hsl(0deg 0% 0%) 0%,hsl(300deg 60% 17%) 38%,hsl(300deg 60% 24%) 57%,hsl(300deg 60% 29%) 68%,hsl(300deg 60% 34%) 76%,hsl(300deg 60% 38%) 81%,hsl(300deg 60% 41%) 84%,hsl(300deg 60% 44%) 87%,hsl(300deg 60% 48%) 90%,hsl(300deg 61% 50%) 93%,hsl(300deg 68% 53%) 100%)",
              "blur(120px)",
              {
                top: 0,
                right: 0,
              }
            ),
          }}
        ></Box>
        <Box
          sx={{
            ...circleStyles(
              "250px",
              "250px",
              "linear-gradient(45deg,hsl(122deg 82% 80%) 0%,hsl(111deg 81% 80%) 11%,hsl(102deg 79% 80%) 22%,hsl(94deg 78% 79%) 33%,hsl(87deg 77% 79%) 44%,hsl(80deg 75% 79%) 56%,hsl(73deg 73% 79%) 67%,hsl(67deg 71% 79%) 78%,hsl(61deg 69% 79%) 89%,hsl(55deg 77% 81%) 100%)",
              "blur(120px)",
              {
                bottom: 0,
                right: 0,
              }
            ),
          }}
        ></Box>
        <Box
          sx={{
            ...circleStyles(
              "350px",
              "350px",
              //   "#F87366", // orange
              "#44ECDE",
              "blur(80px)",

              {
                bottom: 0,
                left: 0,
              }
            ),
          }}
        ></Box>
        <Box
          sx={{
            ...circleStyles(
              "150px",
              "150px",
              " linear-gradient(120deg,hsl(262deg 88% 59%) 0%,hsl(259deg 84% 59%) 10%,hsl(256deg 80% 60%) 20%,hsl(253deg 76% 60%) 30%,hsl(250deg 72% 60%) 40%,hsl(245deg 68% 60%) 50%,hsl(240deg 64% 60%) 60%,hsl(235deg 62% 58%) 70%,hsl(230deg 60% 55%) 80%,hsl(224deg 59% 52%) 90%,hsl(219deg 61% 49%) 100%)",
              "blur(50px)",
              {
                bottom: 0,
                left: 0,
              }
            ),
          }}
        ></Box>
        <Box
          sx={{
            ...circleStyles(
              "120px",
              "120px",
              "linear-gradient(120deg,hsl(299deg 59% 67%) 0%,hsl(300deg 51% 64%) 10%,hsl(301deg 45% 62%) 20%,hsl(302deg 40% 59%) 30%,hsl(304deg 35% 56%) 40%,hsl(306deg 30% 52%) 50%,hsl(309deg 27% 49%) 60%,hsl(314deg 26% 45%) 70%,hsl(321deg 25% 42%) 80%,hsl(333deg 24% 37%) 90%,hsl(0deg 22% 32%) 100%)",
              "blur(50px)",
              {
                bottom: 150,
                left: 300,
              }
            ),
          }}
        ></Box>
      </Box>
    </>
  );
}

export default BackgroundCircles;
