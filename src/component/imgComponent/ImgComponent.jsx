import React from "react";
import "./imgComponent.css";
import { Button } from "../../component";
import images from "../../constant/images";
import { FiLink } from "react-icons/fi";

const ImgComponent = () => {
  return (
    <div className="component-content-wrapper">
      <div className="img_wrapper">
        <img src={images.img1} />
      </div>

      <p>Adipisicing unde vel so dolore, consequatur.</p>
      <Button>
        <FiLink></FiLink> Ipsum Lorem
      </Button>
    </div>
  );
};

export default ImgComponent;
