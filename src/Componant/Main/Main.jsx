import React, { useState } from "react";
import "../Main/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { projectItems } from "./filterProjects";
import { AnimatePresence, motion } from "framer-motion";
// category: 'css',

const Main = () => {
  const [filter, setFilter] = useState("all");
  const [arr, setArray] = useState(projectItems);
  const filterClickHandler = (btnCaregory) => {
    setFilter(btnCaregory);
    const all = projectItems.filter((item) => {
      const zzz = item.category.find((item) => {
        return item === btnCaregory;
      });
      return zzz === btnCaregory;
    });
    setArray(all);
  };
  return (
    <main className="flex">
      <section className="left-section">
        <button
          onClick={() => {
            setFilter("all");
            setArray(projectItems);
          }}
          className={filter === "all" ? "active" : null}>
          All Projects
        </button>
        {/*  */}
        <button
          onClick={() => filterClickHandler("css")}
          className={filter === "css" ? "active" : null}>
          HTML & CSS
        </button>
        {/*  */}
        <button
          onClick={() => filterClickHandler("js")}
          className={filter === "js" ? "active" : null}>
          JavaScript
        </button>
        {/*  */}
        <button
          onClick={() => filterClickHandler("react")}
          className={filter === "react" ? "active" : null}>
          React & MIUI
        </button>
        {/*  */}
        <button
          onClick={() => {
            filterClickHandler("node");
          }}
          className={filter === "node" ? "active" : null}>
          Node & Express
        </button>
        {/*  */}
      </section>
      <section className=" right-section">
        <AnimatePresence>
          {arr.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="card"
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, duration: 50 }}>
                <div className="box" style={{ width: "270px" }}>
                  <img
                    width={"266px"}
                    height={"150px"}
                    src={item.image}
                    alt=""
                  />
                  <div className="info" style={{ width: "266px" }}>
                    <h1 className="title" fontSize={"20px"}>
                      {item.title}
                    </h1>
                    <p className="sub-title">{item.description}</p>
                    <div className="flex more">
                      <div className="icons">
                        <a className="icon">
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                        <a className="icon">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                      <a href="">
                        more
                        <span>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};
export default Main;
