import React from "react";
import "../Contact/Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import contactAnaimation from "../../../public/animation/done.json";
import Lottie from "lottie-react";

function Contact() {
  return (
    <section className="contact-us">
      <div className="title">
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        Contact Us
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        aliquid fugit? Pariatur nulla id numquam.
      </p>
      <div className="flex box">
        <form action="" className=" ">
          <div className="email">
            <label htmlFor="">Email Address</label>
            <input
              required
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
          </div>
          <div className="text-area">
            <label htmlFor="">Your Message</label>
            <textarea
              required
              name=""
              id=""
              cols="37"
              rows="10"
              placeholder="message"
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 322 }}
            animationData={contactAnaimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
