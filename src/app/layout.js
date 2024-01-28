import BackgroundCircles from "@/components/BackgroundCircles";
import GlassCard from "@/components/GlassCard";
import SkillSection from "@/components/SkillSection";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import StarIcon from "@mui/icons-material/Star";
import SupportIcon from "@mui/icons-material/Support";
import { Box } from "@mui/material";
import * as React from "react";
import "../../public/css/globalStyles.css";

export const metadata = {
  title: "May Thinn Khine's Portfolio",
  description: "May Thinn Khine's Portfolio",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "Tasks", href: "/tasks", icon: ChecklistIcon },
];

const PLACEHOLDER_LINKS = [
  { text: "Settings", icon: SettingsIcon },
  { text: "Support", icon: SupportIcon },
  { text: "Logout", icon: LogoutIcon },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <ThemeRegistry>
          <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
            <BackgroundCircles />
            <GlassCard />
          </Box>
          <SkillSection></SkillSection>
        </ThemeRegistry>
      </body>
    </html>
  );
}
