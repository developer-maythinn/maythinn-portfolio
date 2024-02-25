import { Box, Container } from "@mui/material";
import SectionTitle from "./SectionTitle";

function ParentSection({ children, caption, title, customTitleStyles, id }) {
  return (
    <>
      <Container id={id}>
        <Box
          sx={{
            width: "100%",
            height: "fit-content",
            py: 8,
            px: 2,
          }}
        >
          <SectionTitle
            caption={caption}
            title={title}
            customTitleStyles={customTitleStyles}
          ></SectionTitle>
          {children}
        </Box>
      </Container>
    </>
  );
}

export default ParentSection;
