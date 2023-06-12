import React from "react";
import "./minima-ad.css";
import { FiLink } from "react-icons/fi";
import images from "../../constant/images";

const Minima = () => {
  return (
    <div className="app-minima">
      <div className="app-minima-wrapper content_width">
        <div className="app-minima-left">
          <div className="minima-left-img">
            <img src={images.img1} />
          </div>
          <div className="minima-left-links">
            <a href="#">
              <FiLink />
              Ipsum Lorem
            </a>
            <a href="#">
              <FiLink />
              Ipsum Lorem
            </a>
            <a href="#">
              <FiLink />
              Ipsum Lorem
            </a>
          </div>
        </div>
        <div className="app-minima-right">
          <div className="minima-right-ad">
            <p>
              Numquam.<span> Esse aliquip do, magni.</span>{" "}
            </p>
            <h4>Minima ad for vitae sit</h4>
            <a href="#">Minima ad for vitae sit</a>
          </div>
          <div className="minima-right-img">
            <img src={images.img2} />
          </div>
          <div className="minima-right-links">
            <a className="link" href="#">
              <FiLink />
              Ipsum Lorem
            </a>
            <p>Adipisicing unde vel so dolore, consequatur.</p>
            <a className="link2">Ipsum Lorem</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minima;
