import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import MenuComponent from "./MenuComponent";

const pages = ["Home", "About", "Skills", "Project", "Contact"];

function CustomNav() {
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
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: { xs: "flex-end", md: "initial" },
        }}
      >
        <MenuComponent></MenuComponent>
        {/* <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton> */}

        {/* <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page, index) => (
            <React.Fragment key={index}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            </React.Fragment>
          ))}
        </Menu> */}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          // display: "flex",
          justifyContent: { sm: "flex-end" },
        }}
      >
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                mx: 1,
                color: "#856cc9",
                display: "block",
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {page}
            </Button>
          </React.Fragment>
        ))}
      </Box>{" "}
    </>
  );
}

export default CustomNav;
