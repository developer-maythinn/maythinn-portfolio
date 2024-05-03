"use client";
import React from "react";

import NextJsImage from "@/components/NextJS-Image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
function page() {
  const [open, setOpen] = React.useState(false);
  const thumbnailsRef = React.useRef(null);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>
      <Lightbox
        open={open}
        plugins={[thumbnails]}
        thumbnails={{ ref: thumbnailsRef }}
        on={{
          click: () => {
            (thumbnailsRef.current?.visible
              ? thumbnailsRef.current?.hide
              : thumbnailsRef.current?.show)?.();
          },
        }}
        close={() => setOpen(false)}
        slides={[
          { src: "/project-img/duwun.png" },
          { src: "/project-img/bootstrap-template.png" },
          { src: "/project-img/onow-cms.png" },
        ]}
        render={{ slide: NextJsImage }}
      />
    </>
  );
}

export default page;
