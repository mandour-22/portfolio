import React from "react";
import "../Landing/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import heroAnimation from "../../../public/animation/hero.json";
// animation
import { motion } from "framer-motion";
const Hero = () => {
  const textTitle = "SoftWere Designer, founder, and amateur astronaut.";
  const hVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const spanVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="image-hero">
          <motion.img
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 3 }}
            src="../../../public/img/WhatsApp Image 2023-12-02 at 4.16.16 PM-modified.png"
            alt="صوره عمر مندور ي اخي مش عارفني ولا اي "
            className="avatar"
          />
          <span className="verified">
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        </div>
        <motion.h1 variants={hVariants} animate="visible" initial="hidden">
          {textTitle.split("").map((item, index) => {
            return (
              <motion.span key={index} variants={spanVariants}>
                {item}
              </motion.span>
            );
          })}
        </motion.h1>

        <p>
          I’m Spencer, a software designer and entrepreneur based in New
          YorkCity. I’m the founder and CEO of Planetaria, where we
          developtechnologies that empower regular people to explore space on
          their ownterms.
        </p>

        {/*  */}
        <div className="icon-hero">
          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="#">
            {" "}
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <motion.div
        className="right-section animation"
        initial={{ transform: "translateX(-100)" }}
        animate={{ transform: "translateX(0)" }}
        transition={{ duration: 3 }}>
        <Lottie className="hero-animation" animationData={heroAnimation} />
      </motion.div>
    </section>
  );
};
export default Hero;
