import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
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
            justifyContent: "space-between",
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          <MainTitle
            title="MAY&rsquo;s PORTFOLIO"
            customStyles={{ display: { xs: "none", md: "flex" } }}
          ></MainTitle>
          <CustomNav></CustomNav>

          <MainTitle
            title="MAY&rsquo;s PORTFOLIO"
            customStyles={{
              display: { xs: "flex", md: "none" },
            }}
          ></MainTitle>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
