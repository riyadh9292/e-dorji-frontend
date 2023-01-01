import React from "react";
import { BouncyDiv } from "../../pages/Home";
import "./Paralax.css";

const Paralax = () => {
  return (
    <div className="py-5">
      <BouncyDiv>
        <h1 className="display-1 my-5 services-header">
          Our Very very Special Package
        </h1>
      </BouncyDiv>

      <div className="parallax">
        <h1 className="pt-5 display-1 honeymoon-title">Marrige Package</h1>
        <BouncyDiv>
          <h4 className="honeymoon-title">80% off any package</h4>
        </BouncyDiv>

        <button className="booking-button fs-1 fw-bold">Book Now</button>
      </div>
      <div className="parallax-content honeymoon-conditions">
        <h1 className="honeymoon-title">
          Terms and conditions for Marrige package
        </h1>
        <ol className="text-xs text-gray-400 font-semibold">
          <li>
            Our CEO of this company have to be invited in your wedding
            ceremony.Our CEO had to attend your program.You have to take at
            least 3 of our packages previously.Which Marrige package to give you
            , it's depend on us.You can't sue us for this package
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Paralax;
