import React from "react";
import { interior, space, luxury, luxury2 } from "assets";
import { Card } from "components/General Component";
import "./style.scss";

const Body = () => {
  return (
    <>
      <div className="bodycon">
        <h1>Impeccably Crafted Office Furniture offering Unmatched Comfort</h1>
        <div className="inner">
          <div className="card-section">
            <Card
              image="https://res.cloudinary.com/dcoqt2wpo/image/upload/v1658971739/interior_ijlrbb.png"
              title="Interior Architecture"
              text="With beautiful display options, from hutch and open shelving to filing cabinet, we have the solution for your desired office space."
              button={true}
            />
            <Card
              image="https://res.cloudinary.com/dcoqt2wpo/image/upload/v1658971739/space_e33i7a.png"
              title="Space Decor"
              text="We offer a large selection of high quality interior office space decor to help you truly create the look that is right for you."
              button={true}
            />
            <Card
              image="https://res.cloudinary.com/dcoqt2wpo/image/upload/v1658971740/luxury_dqnnk2.png"
              title="Luxury Furniture"
              text="We curated a collection of inspirational, premium chairs and desks that elevate your space"
            />
            <Card
              image="https://res.cloudinary.com/dcoqt2wpo/image/upload/v1658971785/luxury2_kp531x.png"
              title="Luxury Furniture"
              text="We curated a collection of inspirational, premium chairs and desks that elevate your space"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { Body };
