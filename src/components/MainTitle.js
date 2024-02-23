import { Typography } from "@mui/material";

function MainTitle({ title, customStyles }) {
  return (
    <>
      {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
      {/* <Image src={"/secretary.png"} width="100" height="100"></Image> */}

      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 900,
          // letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          textTransform: "uppercase",
          wordSpacing: "-5px",
          ...customStyles,
        }}
      >
        {title}
      </Typography>
    </>
  );
}

export default MainTitle;
