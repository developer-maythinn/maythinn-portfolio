import { Box, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import * as React from "react";
import CustomNav from "./CustomNav";
import MainTitle from "./MainTitle";

function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" variant="dense">
      <Container sx={{ width: { md: "80%" } }}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Image
              src="/secretary-bw.png"
              // layout="responsive"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <MainTitle
              title="MAY THINN"
              customStyles={{
                ml: 2,
              }}
            ></MainTitle>
          </Box>

          <CustomNav></CustomNav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
