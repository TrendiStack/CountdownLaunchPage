import React from "react";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";

import "./SocialsIcons.css";

const SocialIcon = () => {
  return (
    <div className="socialsContainer">
      <div className="facebookIcon icon">
        <Facebook />
      </div>
      <div className="instaIcon icon">
        <Instagram />
      </div>
      <div className="pinIcon icon">
        <Pinterest />
      </div>
    </div>
  );
};

export default SocialIcon;
