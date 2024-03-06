import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [them, setThem] = useState(
    localStorage.getItem("currentMood") ?? "dark"
  );

  useEffect(() => {
    if (them === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [them]);

  // show Mega Menu
  const showModalsHandler = () => setShowModal(true);
  const hidenModalsHandler = () => setShowModal(false);

  return (
    <header className="flex">
      <button className="Menu icon-menu" onClick={showModalsHandler}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a style={{ cursor: "pointer" }}>About</a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }}>Articles</a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }}>Projects</a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }}>Speaking</a>
          </li>
          <li>
            <a style={{ cursor: "pointer" }}>Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="icon-moon-o"
        onClick={() => {
          localStorage.setItem(
            "currentMood",
            them === "light" ? "dark" : "light"
          );
          setThem(localStorage.getItem("currentMood"));
        }}>
        {them === "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>

      {showModal && (
        <div className="overlay">
          <ul className="model">
            <li onClick={hidenModalsHandler}>
              <button className="icon-clear">
                {" "}
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
// <FontAwesomeIcon icon={faSun} />
