import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../AboutUs/style.css";
import AboutImage1 from "../../assets/img/aboutImage.jpg";
import AboutImage2 from "../../assets/img/aboutImage2.jpg";
import AboutImage3 from "../../assets/img/aboutImage3.png";

const Aboutus = (props) => {
  return (
    <div>
      <section className="aboutus">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="aboutUsHead">About the Project</h1>
              <p className="aboutUsPara">
                Minutes of Meeting Summarizer would get the transcriptions of
                meetings, summarize, translate, narrate and possibly provide
                aspect based sentiment analysis on the extracted summaries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row aboutRow">
            <div className="col-12 col-sm-6">
              <h2 className="aboutHead1">
                <b>What we do?</b>
              </h2>
              <p>
                Our Project provides automated meeting minutes based on
                state-of-the-art ML and NLP (Natural Language Processing)
                technology.
              </p>
              <h2 className="aboutHead1">
                <b>Why we do it?</b>
              </h2>
              <p>
                Meeting minutes are time-consuming, distracting, and boring,
                which leaves room for inefficiencies and greater expenses. In
                fact, $37 billion is wasted annually in the U.S. on unproductive
                meetings.
              </p>
            </div>
            <div className="col-sm-6 col-12">
              <img
                src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?w=740&t=st=1662630862~exp=1662631462~hmac=bbf9abadb2e6a29b5060ebd807c5e01fa2168fc0e61c4ad7bb080ddd3ca5b35e"
                alt="about"
                className="img-fluid"
              ></img>
            </div>
          </div>
          <div className="row aboutRow">
            <div className="col-sm-6 col-12">
              <img
                src="https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?w=740&t=st=1662631074~exp=1662631674~hmac=be7fd5b1c1241714851d4b738dbc1cd6704e0fceca8db872cce2ce56d58beda5"
                alt="about"
                className="img-fluid"
              ></img>
            </div>
            <div className="col-12 col-sm-6">
              <h2 className="aboutHead1">
                <b>What is the Plan?</b>
              </h2>
              <p>
                We think meetings should be vibrant, interesting, and efficient.
                So Our project, an ML-powered SaaS solution for remote and
                in-person meetings, to change the way meetings are run.
                Automatically generated meeting minutes produced instantly from
                your voice, in addition to extracted action items and shared
                insights, are the future of successful meetings.
              </p>
            </div>
          </div>
          <div className="row aboutRow">
            <div className="col-12 col-sm-6">
              <h2 className="aboutHead1">
                <b>What is our ultimate Goal?</b>
              </h2>
              <p>
                We want you to focus on your meetings while leaving the hassle
                of documentation to ML
              </p>
              <ul className="list-style">
                <li>
                  <p>Manage your meetings the way you always dreamed to</p>
                </li>
                <li>
                  <p>Never miss a thing</p>
                </li>
                <li>
                  <p>Be fully integrated with your software</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-12">
              <img
                src="https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?w=740&t=st=1662631136~exp=1662631736~hmac=5e94d95e9efb6d3fad4cd645bfe9fa2608f217465719119a27b6a8d2d0a617d0"
                alt="about"
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
