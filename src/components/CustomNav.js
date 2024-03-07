import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { pages } from "./dummyData";
import MenuComponent from "./MenuComponent";

function CustomNav() {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
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
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: { sm: "flex-end" },
        }}
      >
        {pages.map((page, index) => (
          <React.Fragment key={index}>
            <Button
              onClick={(e) => handleClick(e, page.url)}
              sx={{
                my: 2,
                mx: 1,
                color: "#856cc9",
                display: "block",
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: 16,
                position: "relative",
                zIndex: 999,
              }}
            >
              {page.title}
            </Button>
          </React.Fragment>
        ))}
      </Box>{" "}
    </>
  );
}

export default CustomNav;
