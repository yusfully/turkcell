import React from "react";
import Logo from "../.././../assets/logo.png";
import { Button } from "../../atoms/buttons/Button";
import Navigation from "../../molecules/navigation/Navigation";
import "./header.scss";
const navigations = [
  {
    text: "Games",
    link: "#",
  },
  {
    text: "Membership",
    link: "#",
  },
  {
    text: "Download",
    link: "#",
  },

  {
    text: "Blog",
    link: "#",
  },
  {
    text: "Support",
    link: "#",
  },
];
const Header = () => (
  <header className="content header">
    <div className="container">
      <div className="flex">
        <div className="header-left">
          <img className="logo" src={Logo}></img>
        </div>

        <Navigation links={navigations}>
          <div className="header-right">
            <Button
              className="flex-end g-1of1"
              primary
              size="medium"
              onClick={() => console.log("clicked")}
              label="LET'S PLAY"
            />
          </div>
        </Navigation>
      </div>
    </div>
  </header>
);

export default Header;
