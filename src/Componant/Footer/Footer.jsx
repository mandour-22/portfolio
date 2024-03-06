import React from "react";
import "../Footer/Footer.css";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="list">
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
          <a href="">Contact</a>
        </li>
      </ul>
      <p>
        <span style={{ marginRight: "10px" }}>
          <FontAwesomeIcon icon={faCopyright} />
        </span>
        {new Date().getFullYear()} spencer sharp. All Right Reserved
      </p>
    </div>
  );
}
