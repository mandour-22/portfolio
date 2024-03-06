import { useState, useEffect } from "react";
import Header from "./Componant/Header/Header";
import Hero from "./Componant/Landing/Hero";
import Main from "./Componant/Main/Main";
import Contact from "./Componant/Contact/Content";
import Footer from "./Componant/Footer/Footer";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  // scroll to top of page
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowBtnScroll(true);
      } else {
        setShowBtnScroll(false);
      }
    });
  }, []);
  const [showBtnScroll, setShowBtnScroll] = useState(false);
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Contact />
      <div className="line" />
      <Footer />

      {showBtnScroll && (
        <button
          style={{ bottom: "30px", transition: "1s" }}
          className="scroll-to-up"
          onClick={scrollToTopHandler}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
}

export default App;
