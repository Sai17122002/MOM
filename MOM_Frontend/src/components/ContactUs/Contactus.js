import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../ContactUs/style.css";
const Contactus = () => {
  return (
    <div>
      <section className="contactus">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="aboutUsHead">Contact US</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-6">
            <form>
              <div className="form-group">
                <input
                  type="name"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Your Full Name..."
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email Address..."
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Enter your Message"
                  style={{ height: "190px" }}
                  aria-label="With textarea"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning btn-lg btn-block mb-5"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-12 col-sm-6">
            <img
              src="https://www.questel.com/wp-content/uploads/2019/08/contact-us.svg"
              className="img-fluid contact-image"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
