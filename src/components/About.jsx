import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="description">
          <h3 className="name">Jonas Chan Software Developer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
              &emsp;I'm an Application Engineer I at Vanguard, doing front-end and back-end work for our clients to help plan and track their retirement and financial goals. It's a challenging space to work in; we are dealing with people's life saving after all. But we still work hard at giving the client what they want plus a little more. They don't always like it but building the logic and tweaking the stylesheets is where you'll find me.   
              <br></br>
              &emsp;Before being a Developer, I was a Sous Chef at some of the best restaurants in NYC, either pretending to know what I was doing or trying not to burn things. Still, one thing for sure is that I was always working hard.                 
              <br></br>
              &emsp;It's a tough transition, it's hard, but lessons from the kitchen have guided me every day as a developer. I'm nowhere near where I want to be yet, but craft takes time. And here's the page to that document that journey.                 
              </p>
 
              <div className="tech__list">
                <spa style={{fontWeight: "bolder"}}>Core Technologies</spa>
                <div>
                  <ul className="tech__li">
                      <li>Angular</li>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Javascript</li>
                      <li>Html</li>
                      <li>Scss</li>
                      <li>NodeJs</li>
                      <li>PostgreSQL</li>
                  </ul>                      
                </div>                
              </div>
              <div className="learn__list">
              <span style={{fontWeight: "bolder"}}>Learning</span>
                <ul>
                  <li>RxJs</li>
                  <li>GraphQL</li>
                </ul>     
              </div>
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>04.21.1988
                  </p>
                </li>
                <li>
                  <p>
                    <span>Area:</span>Brooklyn, New York.
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:ijonass@gmail.com">ijonass@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+6468757392">646.875.7392</a>
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>
    </>
  );
};

export default About;
