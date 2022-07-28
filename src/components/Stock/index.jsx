import React from "react";
import {
  Cassina,
  Hawort,
  Walterknoll,
  cassina,
  haworth,
  walterknoll,
} from "assets";
import "./style.scss";

const Stock = () => {
  return (
    <>
      <div className="stockcon">
        <div className="inner">
          <h1>With Stock From</h1>
          <div className="images">
            <img src={Hawort} alt="" />
            <img src={Walterknoll} alt="" />
            <img src={Cassina} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Stock };
