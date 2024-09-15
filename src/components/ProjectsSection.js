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
import React, { Fragment, useState } from "react";
import {
  GitHub,
  Launch,
  Lock,
  LockPerson,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJS-Image";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function ProjectsSection() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const thumbnailsRef = React.useRef(null);
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setOpen(true); // Open the lightbox when an image is clicked
  };

  // Function to handle closing the lightbox
  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
    setOpen(false); // Close the lightbox
  };
  const zoomRef = React.useRef(null);

  return (
    <>
      <ParentSection
        caption={"Private and Public Projects"}
        title={"My Projects"}
        customTitleStyles={{ color: "#fafafa", mb: 6 }}
        id="projects"
      >
        {typeof selectedImageIndex === "number" &&
          projects[selectedImageIndex].slideImages &&
          projects[selectedImageIndex].slideImages.length > 0 && (
            <Lightbox
              currentIndex={0}
              open={open}
              close={handleCloseLightbox}
              plugins={[Thumbnails, Zoom]}
              thumbnails={{ ref: thumbnailsRef }}
              on={{
                click: () => {
                  (thumbnailsRef.current?.visible
                    ? thumbnailsRef.current?.hide
                    : thumbnailsRef.current?.show)?.();
                },
              }}
              slides={
                typeof selectedImageIndex === "number" &&
                projects[selectedImageIndex].slideImages
              }
              render={{ slide: NextJsImage }}
            />
          )}

        <Grid
          container
          spacing={{ md: 3, xs: 2 }}
          sx={{
            alignItems: "stretch",
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
                            onClick={() => handleImageClick(index)}
                            alt="Random image"
                            src={project.imgSrc}
                            sizes="100vw"
                            style={{
                              width: "100%",
                              height: "inherit",
                              objectFit: "cover",
                              filter: project.isBlur ? "blur(30px)" : "initial",
                              cursor:
                                project.slideImages.length > 0
                                  ? "pointer"
                                  : "initial",
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
                          ) : project?.slideImages.length > 0 ? (
                            <Button
                              size="small"
                              variant="outlined"
                              startIcon={<Visibility></Visibility>}
                              onClick={() => handleImageClick(index)}
                            >
                              View
                            </Button>
                          ) : (
                            <Button
                              size="small"
                              variant="outlined"
                              disabled
                              startIcon={<VisibilityOff></VisibilityOff>}
                              sx={{ cursor: "not-allowed" }}
                            >
                              Private
                            </Button>
                          )}
                        </CardActions>
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
