import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactTooltip from "react-tooltip";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";
import Technology from "./Technology"

const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Creative Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Website</Tab>
                <Tab>Component</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                
                <TabPanel>
                  <ul className="portfolio_list">
                    {/* START inspect Map toggleModalFour*/}
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/gif/projects/inspect_map.gif"
                            alt="Details"
                            data-tip
                            data-for="detail2"
                            onClick={toggleModalFour}
                          />

                          <ReactTooltip
                            id="detail2"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                            <h5>Inspect Map</h5>
                            <span>Query NYC restaurant's inspection grade seamlessly using public data plublished by NYC</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END inspectMap */}
                    
                    {/* START trader_post setOpen*/}                    
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/gif/projects/trader_post.gif"
                            alt="trader post"
                            data-tip
                            data-for="trader_post"
                            onClick={() => setOpen(true)}
                          />
                          <ReactTooltip
                            id="trader_post"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Jonas Chan</h5>
                              <span>Trader Post</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END trader_post */}

                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL TAB */}

                <TabPanel>
                  <p>website tab</p>
                </TabPanel>
                {/* END Website Tab */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <li>
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                            src="assets/img/portfolio/2.jpg"
                            alt="Youtube"
                            data-tip
                            data-for="youtube"
                            onClick={() => setOpen(true)}
                          />
                          <ReactTooltip
                            id="youtube"
                            place="bottom"
                            type="light"
                            effect="float"
                            className="tooltip-wrapper"
                          >
                            <div>
                              <h5>Ashely Flores</h5>
                              <span>Youtube</span>
                            </div>
                          </ReactTooltip>
                        </div>
                      </div>
                    </li>
                    {/* END YOUTUBE */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END Component Tab */}

              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>

      {/* all modal video and popup goes here */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />


      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Selena Gomez</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/8.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL Inspect Map isOpen4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/gif/projects/inspect_map.gif)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3><a src="https://adamant-vase.surge.sh/">Inspect Map</a></h3>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    Inspect Map is a web tool that makes it easier for user in NYC to search for restaurant's inspection results.
                    The Health Department conducts unannounced inspections of restaurants at least once a year. Inspectors check that restaurants comply with food safety rules.
                    Violations of food safety rules carry point values, and a restaurant’s score corresponds to a letter grade.
                    The lower the score, the better the grade.
                    Heres a <a href="https://www1.nyc.gov/site/doh/services/restaurant-grades.page">link</a> if you would like to learn more about how a restaurant is scored and graded.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Demo link</span>
                      <span><a src="https://adamant-vase.surge.sh/" style={{textDecoration: "underline",}}>Inspect Map</a></span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Full-Stack Web App</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>June 06, 2021</span>
                    </li>
                    <li>
                      <span className="first">Technology</span>
                      <Technology stack={["html", "css", "javascript","reactjs","nodejs","postgresql"]}/>
                    </li>
                      {/* END SOCIAL SHARE */}
                    <li>
                      <span className="first">Social</span>
                      <Social />
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL Inspect Map isOpen4  */}
    </>
  );
};

export default Portfolio;
