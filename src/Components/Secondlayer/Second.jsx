import React from "react";
import "./Second.css";

const Second = () => {
  return (
    <div>
      <div className="nav2">
        <div className="inline1">
          <div className="int">
            <img className="imag" src="./images/logo.png" />
            <div className="int4">
              <div className="main1">LOSANGELES</div>
              <div className="main2">MOUNTAINS</div>
            </div>
          </div>
          <div className="navin">
            <div className="int2">
              <div className="int11">
                <h4 className="int1">01.HISTORY</h4>
              </div>
              <div className="int12">
                <h4 className="int3">02.TEAM </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layer2">
        <div className="Home2">
          <h1>01</h1>
          <div className="history">
          <h4>HISTORY</h4>
          <div className="box"></div>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            dignissimos architecto mollitia veniam culpa sapiente consequatur
            quo possimus quasi ab asperiores praesentium fugiat, minima eaque
            iure omnis nihil excepturi maxime ut eos impedit sed tempora
            deleniti. Quas illo accusantium ab culpa odit commodi ut quaerat
            quia? Quibusdam doloremque quae sapiente!
          </p>
        </div>
        <div className="carousel">
          <img src="./images/cliff.webp" />
          <img src="./images/land.jpeg" />
          <img src="./images/cliff.webp" />
          <img src="./images/land.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default Second;
