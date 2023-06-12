import React from "react";
import "./intro.css";
import { Button } from "../../component";
import { FiMapPin, FiMail, FiLink } from "react-icons/fi";

const Intro = () => {
  return (
    <div className="app-intro">
      <div className="app-intro-wrapper content_width">
        <div className="intro-title flex_center">
          <h1>
            Proident anim <span>nor nulla iste.</span>
          </h1>
        </div>
        <div className="app-intro-links">
          <div className="app-intro-left">
            <p>Minim modi yet omnis nor quia so minima.</p>
          </div>
          <div className="app-intro-right">
            <Button>
              <FiMail></FiMail> Ipsum Lorem
            </Button>
            <Button>
              <FiLink></FiLink> Ipsum Lorem
            </Button>

            <Button>
              <FiMapPin></FiMapPin> Ipsum Lorem
            </Button>
          </div>
          <div className="cleanFloat"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
