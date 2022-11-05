import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import Fade from "react-reveal/Fade";
import "../../assets/css/style.css";
import "./style.css";
import headerImage from "../../assets/img/headerImage.svg";
import GoogleMeet from "../../assets/img/googlemeet.png";
import FeatureZoom from "../../assets/img/featureZoom.png";
import FeatureImage2 from "../../assets/img/featureImage2.svg";
import DescriptionIcon from "@material-ui/icons/Description";
import Step1 from "../../assets/img/step1.png";
import Step2 from "../../assets/img/step2.svg";
import Step3 from "../../assets/img/step3.svg";
import Step4 from "../../assets/img/step4.png";
import Step5 from "../../assets/img/step5.svg";
import { NavLink } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <section id="hero" className="clearfix mt-5">
        <div className="container headerContainer d-flex h-70 mt-5">
          <div className="row justify-content-center align-self-center">
            <div className="col-md-6 intro-info order-md-first order-last">
              <Fade left>
                <h2 className="heading">
                  <span className="navBarColor">Automated</span> MEETING NOTES
                  FOR IN-PERSON AND REMOTE CONVERSATIONS
                </h2>
              </Fade>
              <p style={{ margin: 0, padding: 0, fontSize: "25px" }}>
                A lot is said, A lot is saved
              </p>
              <p style={{ margin: 0, padding: 0, fontSize: "25px" }}>
                Say More, Write Less
              </p>
              <p style={{ margin: 0, padding: 0, fontSize: "25px" }}>
                Breaking Down The Language Barrier
              </p>
            </div>

            <div className="col-md-6 intro-img order-md-last order-first mt-5">
              <img src={headerImage} className="img-fluid" alt="homepage" />
            </div>
          </div>
        </div>
      </section>
      <section className="pageWidth">
        <div className="container">
          <div className="row feature">
            <div className="col-sm-6 col-12">
              <img
                className="img-fluid zoomLogo"
                src={GoogleMeet}
                alt="homepage"
              ></img>
              <h2 className="featureHeading f1">
                <span className="Empasized">Google Meet</span> video
                conferencing with Automated Meeting Notes
              </h2>
            </div>
            <div className="col-sm-6 col-12">
              <img
                className="img-fluid featureImage"
                src={FeatureZoom}
                alt="homepage"
              ></img>
            </div>
          </div>
          <div className="row feature">
            <div className="col-sm-6 col-12">
              <img className="img-fluid featureImage" src={FeatureImage2}></img>
            </div>
            <div className="col-sm-6 col-12">
              <h2 className="featureHeading">
                <span className="Empasized">CREATE & INNOVATE</span>
              </h2>
              <h2 className="featureHeading">Leave the hassle to ML</h2>

              <p>
                Your time, your mind, and your experience is unique and
                precious! In order to succeed, you must <strong>focus</strong>{" "}
                on what matters.
              </p>
              <p>
                So our project created a smart solution for Automated Meeting
                Minutes, converting conversations into actions,{" "}
                <strong>empowering</strong> skills, and saving hours of time.
              </p>
            </div>
          </div>
          <div className="row feature">
            <div className="col-sm-6 col-12">
              <h2 className="featureHeading f1">
                A new way to your{" "}
                <span className="Empasized">Remote Conversation</span>
              </h2>
              <p>
                Stay connected to your conversation. Get real-time action items
                extracted. Grab insights automatically on the fly. Enjoy a live
                transcript and skyrocket the productivity.
              </p>
            </div>
            <div className="col-sm-6 col-12">
              <div
                style={{ display: "flex" }}
                class="embed-responsive embed-responsive-16by9"
              >
                <img
                  width="90%"
                  height="100%"
                  className="remote-image"
                  src="http://associationsnow.com/wp-content/uploads/2022/07/GettyImages-1359879029.jpg"
                  alt="Remote Conversation Image"
                />
              </div>
            </div>
          </div>
          {/* <div className="row feature">
            <div className="col-sm-6 col-12">
              <h2 className="featureHeading f1">
                A new way to your{" "}
                <span className="Empasized">Remote Conversation</span>
              </h2>
              <p>
                Stay connected to your conversation. Get real-time action items
                extracted. Grab insights automatically on the fly. Enjoy a live
                transcript and skyrocket the productivity.
              </p>
            </div>
            <div className="remote-image">
              
            </div>
          </div> */}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row workFlowRow">
            <div className="col-12">
              <h2 className="workFlowHead">Our Project's Control Flow</h2>
              <h4 className="workFlowSubHead">
                Functionalities and What Our Project Offers
              </h4>
            </div>
          </div>
          <div className="row workFlowRow">
            <div className="col-sm-6 col-12">
              <h2 className="featureHeading">
                <span className="Empasized">Add Chrome Extension</span>
              </h2>
              <p>
                Add our chrome extension to your google meet and enjoy the power
                of ML and NLP.
              </p>
            </div>
            <div className="col-sm-6 col-12">
              <img src={Step1} className="img-fluid" alt="homepage"></img>
            </div>
          </div>
          <div className="row workFlowRow">
            <div className="col-sm-6 col-12">
              <img src={Step2} className="img-fluid" alt="homepage"></img>
            </div>
            <div className="col-sm-6 col-12">
              <h2 className="featureHeading">
                <span className="Empasized">Text-to-Speech</span>
              </h2>
              <p>
                A Text-to-Speech system can be deployed to make things easier
                for the end-user.
              </p>
            </div>
          </div>
          <div className="row workFlowRow">
            <div className="col-sm-6 col-12">
              <h2 className="featureHeading">
                <span className="Empasized">
                  Transcription and Summarization
                </span>
              </h2>
              <p>
                We transcribe and summarize your conversations on the fly and
                also generate a transcript and summary <strong>enriched</strong>{" "}
                with speaker identification and voice separation, allowing you
                to <strong>understand</strong> exactly who said what.
              </p>{" "}
            </div>
            <div className="col-sm-6 col-12">
              <img src={Step3} className="img-fluid" alt="homepage"></img>
            </div>
          </div>
          <div className="row workFlowRow">
            <div className="col-sm-6 col-12">
              <img src={Step4} className="img-fluid" alt="homepage"></img>
            </div>
            <div className="col-sm-6 col-12">
              <h2 className="featureHeading">
                <span className="Empasized">Translation</span>
              </h2>
              <p>
                We Provide Transcript and Summary of the meeting in multiple
                languages to connect individuals from various background.
              </p>
            </div>
          </div>
          <div className="row workFlowRow">
            <div className="col-sm-6 col-12">
              <h2 className="featureHeading">
                <span className="Empasized">Conversation To Action</span>
              </h2>
              <p>
                From now on there is a <strong>platform</strong> for all your
                meetings and conversations. It's like having a 'remember all the
                action items' and 'never miss the follow ups'{" "}
                <strong>SUPERPOWER</strong> to better manage meetings, focus on
                the things that matter, and free up time for{" "}
                <strong>yourself</strong>.
              </p>
            </div>
            <div className="col-sm-6 col-12">
              <img src={Step5} className="img-fluid" alt="homepage"></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="roundButton bg-primary">
          <NavLink to="/nptel">
            <h3
              style={{
                color: "white",
                textAlign: "center",
                paddingTop: "20px",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              <DescriptionIcon style={{ fontSize: "40px" }}></DescriptionIcon>
            </h3>
          </NavLink>
        </div>
      </section>

      <main id="main">{/* Team Section Ends */}</main>
    </div>
  );
}

export default Homepage;
