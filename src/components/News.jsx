import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  function toggleModalOne() {
    setIsOpen1(!isOpen1);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5)
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6)
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Journey</span>
              <h3>Latest Happenings</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <ul>
          {/* START SINGLE BLOG ModalFour*/}
          <li>
            <div className="list_inner">
              <div className="image" onClick={toggleModalFour}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/36343923)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Jonas Chan</a>
                    <span>05 AUG 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalFour}>
                  CODING BOOTCAMP FINISHED! ONE STEP CLOSER TO BEING A DEVELOPER
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFour}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/36343923)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}

                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Jonas Chan</a>
                            <span>05 Aug 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                          CODING BOOTCAMP FINISHED! ONE STEP CLOSER TO BEING A DEVELOPER
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                          What a year 2020 has been. No elaborating necessary; I'm pretty sure everyone was affected in some way.
                          One day 2020 will be the one-word catchphrase for everything messed up and bad; "How's your day" "A total 2020." "Say no more...".
                          As for me, It pushed me out of my comfort zone. Now, look, I completed an intensive nine months long coding Bootcamp.
                          </p>
                          {/* END QUOTEBOX */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
                          {/* CS 50 ModalOne*/}
          <li>

            <div className="list_inner">
              <div className="image" onClick={toggleModalOne}>
                <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(https://certificates.cs50.io/f8f0d23a-7ece-4698-9e01-9d29d693c9a7.png?size=A4)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}

              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Jonas Chan</a>
                    <span>10 SEPT 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalOne}>
                  HARVARD CS50 Certificate lookingg goood
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen1}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="image">
                        <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(https://certificates.cs50.io/f8f0d23a-7ece-4698-9e01-9d29d693c9a7.png?size=A4)",
                          }}
                        ></div>
                      </div>
                      {/* END IMAGE */}

                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Jonas Chan</a>
                            <span>10 SEPT 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                        HARVARD CS50 Certificate lookingg goood
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Learned a bunch of things from the course, was definitly worth the time and effort.
                          </p>
                          {/* END QUOTEBOX */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
                          {/* GOT AN OFFER ModalTwo*/}
          <li>
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Jonas Chan</a>
                    <span>25 SEPT 2021</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                  GOT AN OFFER FROM VANGUARD
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalOne}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Jonas Chan</a>
                            <span>10 SEPT 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                        GOT AN OFFER FROM VANGUARD
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Super exciting news, got an offer from vanguard as an Application Engineer I. The whole thing toke three days from interviewing to getting the offer letter, much shorter than I expected but super excited nonetheless. Hard work pays off!!
                          </p>
                          {/* END QUOTEBOX */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>

                          {/* Work is kicking my ass ModalThree*/}
          <li>
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Jonas Chan</a>
                    <span>15 NOV 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalTwo}>
                  Work is kicking my ass
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalThree}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Jonas Chan</a>
                            <span>15 NOV 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                        Getting my ass kicked at work 
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Learning Angular is one thing, man understanding an existing codebase written by profressionals is a whole different beast. Theres so much to learn and and so much to digest. But it's okay i'll get there showing up is half the battle won already.
                          </p>
                          {/* END QUOTEBOX */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
                          {/* Signing up for udemy class ModalFive*/}
          <li>
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Jonas Chan</a>
                    <span>6 Jan 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalFive}>
                  Signing up for Udemy classes
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalFive}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Jonas Chan</a>
                            <span>6 Jan 2021</span>
                          </p>
                        </div>
                        <h3 className="title">
                        Signing up for udemy classes
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Keep running into situation where I need to be more proficient with my technologies, so I went ahead and 
                            signed up for three udemy classes today, Git, Angular and typescript. Hey gotta keep on learning right?
                            
                          </p>
                          {/* END QUOTEBOX */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
                          {/* Finished a complex ticket ModalSix */}
          <li>
            <div className="list_inner">
              <div className="details">
                <div className="extra">
                  <p className="date">
                    By <a href="#">Jonas Chan</a>
                    <span> 01 FEB 2022</span>
                  </p>
                </div>
                {/* END EXTRA */}

                <h3 className="title" onClick={toggleModalSix}>
                  Got my first big ticket in and feeling good about the work done
                </h3>
                <div className="tokyo_tm_read_more">
                  <a onClick={toggleModalSix}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
              {/* END DETAILS */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div className="tokyo_tm_modalbox_news">
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="assets/img/svg/cancel.svg" alt="close icon" />
                  </button>
                  {/* END CLOSE ICON */}
                  <div className="box_inner">
                    <div className="description_wrap scrollable">
                      <div className="details">
                        <div className="extra">
                          <p className="date">
                            By <a href="#toggleButton">Jonas Chan</a>
                            <span>01 FEB 2022</span>
                          </p>
                        </div>
                        <h3 className="title">
                        Got my first big ticket in and feeling good about the work done
                        </h3>
                      </div>
                      {/* END DETAILS */}

                      <div className="main_content ">
                        <div className="descriptions">
                          <p className="bigger">
                            Created my first component on the site today, waiting for QA to give it the okay before releasing to public.
                            It was quite a difficult one and lost some sleep over it, but worth it in the end, and am quite happy with the result.
                            Got some good praise from the team and telling me to keep up the good work. That definitly felt good. Today was a good day.
                          </p>
                          {/* END QUOTEBOX */}
                        </div>
                      </div>
                      {/* END MAIN CONTENT */}
                    </div>
                  </div>
                </div>
              </Modal>
              {/* END MODAL */}
            </div>
            {/* END LIST INNER */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default News;
