import React from "react";
import { CityLogo } from "../ui/Icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo link width="70px" height="70px" linkTo="/" />
        <div className="footer_discl">
          Manchester City 2019. All Rights Reserved &copy;
        </div>
      </div>
    </footer>
  );
};

export default Footer;
