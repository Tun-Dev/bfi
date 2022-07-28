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
              image={interior}
              title="Interior Architecture"
              text="With beautiful display options, from hutch and open shelving to filing cabinet, we have the solution for your desired office space."
              button={true}
            />
            <Card
              image={space}
              title="Space Decor"
              text="We offer a large selection of high quality interior office space decor to help you truly create the look that is right for you."
              button={true}
            />
            <Card
              image={luxury}
              title="Luxury Furniture"
              text="We curated a collection of inspirational, premium chairs and desks that elevate your space"
            />
            <Card
              image={luxury2}
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
