import { Input } from "@mui/material";
import React from "react";

function MenuComponent({ pages }) {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {pages.map((page, index) => (
            <React.Fragment key={index}>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  {page}
                </a>{" "}
              </li>
            </React.Fragment>
          ))}

          {/* <li className="navigation__item">
            <a href="#" className="navigation__link">
              About us
            </a>{" "}
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Careers
            </a>{" "}
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Projects
            </a>{" "}
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Contact Us
            </a>{" "}
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default MenuComponent;
