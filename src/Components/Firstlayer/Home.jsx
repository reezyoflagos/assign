import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="head">
        <header className="navbar">
        <div class="nav-wrapper">
          <div class="logo-container">
            <img  className="imds"  src="./images/logo.png"/>
          </div>
          <nav>
            <input class="hidden" type="checkbox" id="menuToggle" />
            <label class="menu-btn" for="menuToggle">
              <div class="menu"></div>
              <div class="menu"></div>
              <div class="menu"></div>
            </label>
            <div class="nav-container">
              <ul class="nav-tabs">
                <h4 className="navtab1">Layer 1 </h4>
                <li class="nav-tab">01.History</li>
                <li class="nav-tab">02.Team</li>
                <h4 className="navtab1">Layer 2</h4>
                <li class="nav-tab">01.History</li>
                <li class="nav-tab">02.Team</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="nav">
        <div className="image">
          <img className="imag" src="./images/logo.png" />
        </div>
        <div className="headers">
          <div className="int11">
            <h4 className="int1">01.HISTORY</h4>
          </div>
          <div className="int12">
            <h4 className="int2">02.TEAM </h4>
          </div>
        </div>
      </div>
      <div className="int">
        <div className="main1">LOSANGELES</div>
        <div className="main2">MOUNTAINS</div>
      </div>
    
    </div>
  );
};

export default Home;
