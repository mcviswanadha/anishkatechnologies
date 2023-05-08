import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>Our resources are thinkers and doers. We combine strategy and execution to help organizations accelerate growth and realize a brighter future. We turn complex technology solutions into a practical and actionable way forward. Then we help deliver them globally. A culture of innovation lies at our very core. You can see it in our people. We live and breathe change every day because we believe in doing whatever it takes to help organizations accelerate growth by connecting them to the right technology. And delivering it around the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
