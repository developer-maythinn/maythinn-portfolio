"use client";

import { Box, Chip, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { projects } from "./dummyData";
import ParentSection from "./ParentSection";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import {
  GitHub,
  Launch,
  Lock,
  LockPerson,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Link from "next/link";

function ProjectsSection() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <ParentSection
        caption={"Private and Public Projects"}
        title={"My Projects"}
        customTitleStyles={{ color: "#fafafa", mb: 6 }}
      >
        <Grid
          container
          spacing={{ md: 3, xs: 2 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
          }}
        >
          {projects &&
            projects.length > 0 &&
            projects.map((project, index) => {
              return (
                <Fragment key={index}>
                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      my: 2,
                      // height: { xs: "fit-content", sm: 520, md: "fit-content" },
                      // maxHeight: "650px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        alignItems: "stretch",
                        display: "flex",
                        height: "100%",
                      }}
                    >
                      {/* <Card
                        sx={{
                          width: "inherit",
                          position: "relative",
                          p: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "54vw",
                              md: "100%",
                            },
                            // width: "100%",
                            height: { xs: "fit-content", md: "200px" },
                            margin: "auto",
                            position: "relative",
                            outline: "1px solid #333",
                            borderRadius: 2,
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            alt="Random image"
                            src={project.imgSrc}
                            sizes="100vw"
                            style={{
                              width: "100%",
                              height: "inherit",
                              objectFit: "cover",
                              filter: project.isBlur ? "blur(30px)" : "initial",
                            }}
                            width={200}
                            height={300}
                          />
                          {project.isBlur && (
                            <LockPerson
                              sx={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 1,
                                margin: "auto",
                                color: "#686868",
                              }}
                            ></LockPerson>
                          )}
                        </Box>

                        <CardContent sx={{ pt: 2, px: 0 }}>
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="h2"
                            sx={{ fontWeight: 500 }}
                          >
                            {project.title}
                          </Typography>

                          <Typography variant="body2">
                            {project.description}
                          </Typography>
                          <Box sx={{ my: 1 }}>
                            {project.techStack &&
                              project.techStack.length > 0 &&
                              project.techStack.map((item, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    <Chip
                                      size="small"
                                      label={item}
                                      sx={{
                                        mr: 0.5,
                                        mb: 0.5,
                                        textTransform: "lowercase",
                                        color: "#fafafa",
                                        borderRadius: "8px",
                                        background: "#856cc9",
                                        fontSize: 12,
                                        height: 22,
                                        // "#03DAC5",
                                      }}
                                    />
                                  </React.Fragment>
                                );
                              })}
                          </Box>
                        </CardContent>
                        <CardActions
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            position: { xs: "relative", sm: "absolute" },
                            width: "100%",
                            bottom: { xs: 0, sm: 24 },
                            px: 0,
                            mt: 2,
                          }}
                        >
                          <Link href={project.github} target="_blank">
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<GitHub></GitHub>}
                            >
                              {project && project.github ? "GitHub" : "Private"}
                            </Button>
                          </Link>
                          <Link href={project.link} target="_blank">
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<Visibility></Visibility>}
                            >
                              {project && project.github ? "View" : "Private"}
                            </Button>
                          </Link>
                        </CardActions>
                      </Card> */}
                      <Card
                        sx={{
                          width: "inherit",
                          position: "relative",
                          p: 3,
                        }}
                      >
                        <Box
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "54vw",
                              md: "100%",
                            },
                            height: {
                              xs: "fit-content",
                              md: "200px",
                            },
                            display: "inline-flex",
                            margin: "auto",
                            position: "relative",
                            outline: "1px solid #333",
                            borderRadius: 2,
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            alt="Random image"
                            src={project.imgSrc}
                            sizes="100vw"
                            style={{
                              width: "100%",
                              height: "inherit",
                              objectFit: "cover",
                              filter: project.isBlur ? "blur(30px)" : "initial",
                            }}
                            width={200}
                            height={300}
                          />
                          {project.isBlur && (
                            <LockPerson
                              sx={{
                                position: "absolute",
                                inset: 0,
                                zIndex: 1,
                                margin: "auto",
                                color: "#686868",
                              }}
                            ></LockPerson>
                          )}
                        </Box>
                        <CardContent sx={{ pt: 2, px: 0, pb: 1 }}>
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="h2"
                            sx={{ fontWeight: 500 }}
                          >
                            {project.title}
                          </Typography>

                          <Typography variant="body2" sx={{ mb: 2 }}>
                            {project.description}
                          </Typography>
                          <Box sx={{ my: 1 }}>
                            {project.techStack &&
                              project.techStack.length > 0 &&
                              project.techStack.map((item, index) => {
                                return (
                                  <React.Fragment key={index}>
                                    <Chip
                                      size="small"
                                      label={item}
                                      sx={{
                                        mr: 0.5,
                                        mb: 0.5,
                                        textTransform: "lowercase",
                                        color: "#fafafa",
                                        borderRadius: "8px",
                                        background: "#856cc9",
                                        fontSize: 12,
                                        height: 22,
                                      }}
                                    />
                                  </React.Fragment>
                                );
                              })}
                          </Box>
                        </CardContent>
                        <CardActions sx={{ px: 0 }}>
                          {project.github ? (
                            <Link href={project.github} target="_blank">
                              <Button
                                size="small"
                                variant="outlined"
                                startIcon={<GitHub></GitHub>}
                              >
                                GitHub
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              disabled
                              size="small"
                              variant="outlined"
                              startIcon={<GitHub></GitHub>}
                              sx={{ cursor: "not-allowed" }}
                            >
                              Private
                            </Button>
                          )}
                          {project.link ? (
                            <Link href={project.link} target="_blank">
                              <Button
                                size="small"
                                variant="outlined"
                                startIcon={<Visibility></Visibility>}
                              >
                                {project && project.link ? "View" : "Private"}
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              size="small"
                              variant="outlined"
                              disabled
                              startIcon={<VisibilityOff></VisibilityOff>}
                              sx={{ cursor: "not-allowed" }}
                            >
                              {project && project.link ? "View" : "Private"}
                            </Button>
                          )}
                        </CardActions>
                        {/* <CardActions sx={{ px: 0 }}>
                          <Link
                            href={project.github}
                            target="_blank"
                            style={{
                              cursor:
                                project && project.github
                                  ? "pointer"
                                  : "not-allowed",
                            }}
                          >
                            <Button
                              disabled
                              size="small"
                              variant="outlined"
                              startIcon={<GitHub></GitHub>}
                            >
                              {project && project.github ? "GitHub" : "Private"}
                            </Button>
                          </Link>
                          <Link href={project.link} target="_blank">
                            <Button
                              size="small"
                              variant="outlined"
                              disabled
                              startIcon={
                                project.link ? (
                                  <Visibility></Visibility>
                                ) : (
                                  <VisibilityOff></VisibilityOff>
                                )
                              }
                            >
                              {project && project.link ? "View" : "Private"}
                            </Button>
                          </Link>
                        </CardActions> */}
                      </Card>
                    </Box>
                  </Grid>
                </Fragment>
              );
            })}
        </Grid>
      </ParentSection>
    </>
  );
}

export default ProjectsSection;
