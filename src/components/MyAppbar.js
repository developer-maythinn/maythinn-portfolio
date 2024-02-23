import { Container } from "@mui/material";
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
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            // justifyContent: "space-between",
            justifyContent: "center",
            // mt: 3,
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          {/* <Image
            src="/secretary-bw.png"
            // layout="responsive"
            width={30}
            height={30}
            alt="Picture of the author"
          /> */}
          {/* <MainTitle
            title="MAY THINN"
            customStyles={{ display: { xs: "none", md: "flex" }, ml: 2 }}
          ></MainTitle> */}
          <CustomNav></CustomNav>
          {/* <MainTitle
            title="MAY THINN"
            customStyles={{
              display: { xs: "flex", md: "none" },
            }}
          ></MainTitle> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
