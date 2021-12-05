import React from "react";
// import "./LastSection.scss";

function LastSection() {
  return (
    <div className="contain-sec" id="contact">
      <form action="" className="conForm">
        <div className="formCon">
          <h2>Contact Me</h2>
          <div className="row100">
            <div className="col">
              <div className="inBox">
                <input type="text" name="fname" required="required" />
                <span className="text">First Name</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inBox">
                <input type="text" name="lname" required="required" />
                <span className="text">Last Name</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inBox">
                <input type="text" name="email" required="required" />
                <span className="text">Email</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inBox">
                <input type="text" name="subject" required="required" />
                <span className="text">Subject</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <div className="inBox messageIn">
                <textarea
                  name="message"
                  type="text"
                  id="textarea"
                  rows="10"
                  cols="30"
                  required="required"
                ></textarea>
                <span className="text">Type your message here...</span>
                <span className="line"></span>
              </div>
            </div>
          </div>
          <div className="row100">
            <div className="col">
              <input type="submit" value="Send" id="conSubBtn" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LastSection;
