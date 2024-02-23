import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitHub } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
import { NextLinkComposed } from "./Link";

function SocialComponent() {
  const socialItems = [
    {
      title: "Facebook",
      icon: faFacebookF,
      link: "https://www.facebook.com/maythinn.khine.18",
      color: "#3b5998",
    },
    {
      title: "Linkedin",
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/in/may-thinn-khine/",
      color: "#1ea1f1",
    },
    {
      title: "GitHub",
      icon: faGithub,
      link: "https://github.com/developer-maythinn",
      color: "#1e3050",
    },
  ];
  return (
    <>
      <Box
        sx={{
          flexGrow: 0,
          display: "flex",
        }}
      >
        {socialItems && socialItems.length > 0
          ? socialItems.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Tooltip title={item.title}>
                    <Box
                      component={"span"}
                      sx={{
                        mx: 0.5,
                        width: 30,
                        height: 30,
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        background: item.color,
                        borderRadius: "50%",
                        mx: 1,
                      }}
                    >
                      <NextLinkComposed
                        to={item.link}
                        target="_blank"
                        sx={{ color: "#fff" }}
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          style={{ fontSize: 16 }}
                        />
                      </NextLinkComposed>
                    </Box>
                  </Tooltip>
                </React.Fragment>
              );
            })
          : null}
      </Box>
    </>
  );
}

export default SocialComponent;
