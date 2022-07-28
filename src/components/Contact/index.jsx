import React from "react";
import "./style.scss";

const Contact = () => {
  return (
    <>
      <div className="contactcon">
        <div className="inner">
          <div className="left">
            <h1>Have any Questions?</h1>
            <p>
              Send an email to <span>info@bfi-uae.com</span> or enter your email
              and our support team will get back to you to answer any questions
              you might have
            </p>
          </div>
          <div className="right">
            <div className="input-body">
              <input type="text" placeholder="Enter Your E-mail" />
              <button>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Contact };
