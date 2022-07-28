import React from "react";
import { interior } from "assets";
import "./style.scss";

const Card = ({ image, title, text, button }) => {
  return (
    <>
      <div className="cardcon">
        <div className="inner">
          <div className="top">
            <img src={image} alt="" />
          </div>
          <div className="bottom">
            <h1>{title}</h1>
            <p>{text}</p>
            {button ? <button>Get Started</button> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
