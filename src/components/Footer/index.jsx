import React from "react";
import { Mail, Phone, Location } from "assets";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <div className="footercon">
        <div className="inner">
          <div className="left">
            <h1>Business Furniture International DWC LLC</h1>
          </div>
          <div className="right">
            <div className="r1">
              <div className="sec">
                <img src={Mail} alt="" />
                <p>info@bfi-uae.com</p>
              </div>
              <div className="sec">
                <img src={Phone} alt="" />
                <p>+971 58 576 9229</p>
              </div>
            </div>
            <div className="r2">
              <div className="r2img">
                <img src={Location} alt="" />
              </div>
              <div className="r2word">
                <h5>Dubai</h5>
                <p>Dubai Digital Park Dubai Silicon Oasis Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
