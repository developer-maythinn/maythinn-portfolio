import { Box, Checkbox, Fade, Input } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { pages } from "./dummyData";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useScrollBlock from "./useScrollBlock";

function MenuComponent() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    setChecked(false);
    router.push(href);
  };
  const [blockScroll, allowScroll] = useScrollBlock();
  if (checked) {
    blockScroll(false);
  } else {
    allowScroll(true);
  }

  return (
    <>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          background: "#fff",
          position: "relative",
          zIndex: 9999,
          "&.Mui-checked": {
            transition: "2s",
          },
          "&.MuiCheckbox-root": {
            background: "#fff",
          },
        }}
        checkedIcon={<CloseIcon />}
        icon={<MenuIcon />}
      />
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <Box
          className="navigation__background"
          sx={{ transform: checked ? "scale(90)" : "scale(0)" }}
        >
          &nbsp;
        </Box>
        <Box
          component={"nav"}
          className="navigation__nav"
          sx={{
            opacity: checked ? 1 : 0,
            width: checked ? "100%" : "0",
            zIndex: checked ? 1000 : 0,
            height: { xs: "100vh", sm: "90vh" },
          }}
        >
          <ul className="navigation__list">
            {pages.map((page, index) => (
              <React.Fragment key={index}>
                <li className="navigation__item">
                  <div
                    onClick={(e) => handleClick(e, page.url)}
                    className="navigation__link"
                  >
                    {page.title}
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </Box>
      </div>
    </>
  );
}

export default MenuComponent;
