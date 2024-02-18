import { Box, Chip, Grid } from "@mui/material";
import Image from "next/image";
import { projects } from "./dummyData";
import ParentSection from "./ParentSection";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import { Lock, LockPerson } from "@mui/icons-material";

function ProjectsSection() {
  return (
    <>
      <ParentSection
        caption={"Technical level"}
        title={"My Projects"}
        customTitleStyles={{ color: "#fafafa" }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
          }}
        >
          {projects &&
            projects.length > 0 &&
            projects.map((project, index) => {
              return (
                <Grid
                  item
                  md={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "90%",
                    }}
                  >
                    <Card
                      sx={{
                        width: "inherit",
                      }}
                    >
                      <Box
                        sx={{
                          width: {
                            xs: "85vw",
                            sm: "54vw",
                            md: "100%",
                            background: "#856cca",
                          },
                          height: "250px",
                          margin: "auto",
                          position: "relative",
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
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                        <Box sx={{ my: 2 }}>
                          {project.techStack &&
                            project.techStack.length > 0 &&
                            project.techStack.map((item, index) => {
                              return (
                                <React.Fragment key="index">
                                  <Chip
                                    size="small"
                                    label={item}
                                    sx={{
                                      mr: 0.5,
                                      textTransform: "lowercase",
                                      color: "#fafafa",
                                      borderRadius: "8px",
                                      background: "#856cc9",
                                      // "#03DAC5",
                                    }}
                                  />
                                </React.Fragment>
                              );
                            })}
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </ParentSection>
    </>
  );
}

export default ProjectsSection;
