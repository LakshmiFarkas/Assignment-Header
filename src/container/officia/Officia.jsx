import React from "react";
import "./officia.css";
import { ImgComponent } from "../../component";

const Officia = () => {
  return (
    <div className="app-offica">
      <div className="app-officia-wrapper content_width">
        <div className="app-office-title">
          <h5>Officia ut</h5>
          <a href="#">Ipsum Lorem</a>
        </div>
        <div style={{ clear: "both" }}></div>
        <div className="grid-content">
          <ImgComponent />
          <ImgComponent />
          <ImgComponent />
          <ImgComponent /> <ImgComponent />
          <ImgComponent />
          <ImgComponent />
          <ImgComponent />
        </div>
      </div>
    </div>
  );
};

export default Officia;
