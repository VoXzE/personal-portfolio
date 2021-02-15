import React, { useRef, useEffect, useState } from "react";
import "./assets/css/main.scss";
import Navigation from "./components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faNodeJs, faVuejs, faPython, faReact, faYarn } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const projectsRef: any = useRef(null);
  const contactRef: any = useRef(null);

  const moveToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const moveToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const opemEmail = () => {
    window.location.href = `mailto:voxze.business@gmail.com`;
  }

  const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generateCommets = () => {
    const stylesArr = [
      "width: 46px; height: 1px; top: 50%; left: -80px; animation: 7s linear 0s infinite meteor-1;",
      "width: 46px; height: 1px; top: 207px; left: -80px; animation: 11s linear 0s infinite meteor-1;",
      "right: 700px; bottom: -80px; animation: 7s linear 0s infinite meteor-2;",
      "left: 0; bottom: -80px; animation: 16s linear 0s infinite meteor-2;",
    ];

    for (let i = 0; i < 10; i++) {
      const parentDiv = document.getElementsByClassName("commet-animation");
      const commetDiv: any = document.createElement("div");
      commetDiv.className = `meteor`
      commetDiv.style = `${stylesArr[randomNumber(0, stylesArr.length - 1)]} animation-delay: ${i * randomNumber(100, 2000)}ms;`;
      parentDiv[0].append(commetDiv);
    }
  }

  useEffect(() => {
    generateCommets();
  }, [])

  return (
    <React.Fragment>
      <div className="commet-animation"></div>

      <div className="container">
        <Navigation moveToProjects={moveToProjects} moveToContact={moveToContact} />

        <div className="header">

          <div className="introduction">
            <label>- Introduction</label>
            <h1>Hello! I'm Jeremiah</h1>
            <p>
              I'm a 20-year old, self-taught software engineer currently located in Philadelphia.
              I currently have plans to receive a degree in computer science to further educate my self in this field.
              I've been developing different software applications over the last 5 years.
              I am fluent in many technologies, I primarily write my frontend applications in <em style={{ color: "#00d8ff" }}>React</em>, server side stuff in <em style={{ color: "#83cd29" }}>NodeJS</em>, while using <em style={{ color: "#4a8abd" }}>PostgreSQL</em> to handle data management.
            </p>
          </div>

          <div className="expertise">
            <label>- Technologies</label>
            <div className="icons">
              <div className="item" style={{ animationDuration: "4.1s" }}><FontAwesomeIcon className="icon" style={{ color: "#83cd29" }} icon={faNodeJs} /></div>
              <div className="item"><FontAwesomeIcon className="icon" style={{ color: "#4a8abd" }} icon={faPython} /></div>
              <div className="item" style={{ animationDuration: "4.3s" }}><FontAwesomeIcon className="icon" style={{ color: "#3fb984" }} icon={faVuejs} /></div>
              <div className="item"><FontAwesomeIcon className="icon" style={{ color: "#00d8ff" }} icon={faReact} /></div>
              <div className="item" style={{ animationDuration: "4.6s" }}><FontAwesomeIcon className="icon" style={{ color: "#f7df1e" }} icon={faJs} /></div>
              <div className="item"><FontAwesomeIcon className="icon" style={{ color: "#2c8ebb" }} icon={faYarn} /></div>
            </div>
            <div className="info">
              These are a few of the languages and libraries I use daily.
              I currently use these technologies for personal use and also business when doing work for clients.
              I still plan on learning many more technologies to further expand my knowledge in this field.
            </div>
          </div>

        </div>

        <div className="projects" ref={projectsRef}>
          <label style={{ fontSize: 18 }}>- Previous Projects</label>
          <div className="grid">

            <div className="project">
              <img src={require("./assets/site1.png")} className="project-thumb" alt="project-thumb" />
              <div className="links">
                <a href="https://bityz.com/" className="link" target="_blank">Live</a>
                <a href="https://github.com/MoCapwell/Bityz" className="link" target="_blank">Github</a>
              </div>
            </div>

            <div className="project">
              <img src={require("./assets/site8.png")} className="project-thumb" alt="project-thumb" />
              <div className="links">
                <a href="https://www.npmjs.com/package/phemex-api" className="link" target="_blank">Live</a>
                <a href="https://github.com/VoXzE/phemex-api" className="link" target="_blank">Github</a>
              </div>
            </div>

            <div className="project">
              <img src={require("./assets/site2.png")} className="project-thumb" alt="project-thumb" />
              <div className="links">
                <a href="https://xeno-gaming.co.uk/" className="link" target="_blank">Live</a>
                <a href="https://github.com/XenoGamingCommunity" className="link" target="_blank">Github</a>
              </div>
            </div>

            <div className="project">
              <img src={require("./assets/site7.png")} className="project-thumb" alt="project-thumb" />
              <div className="links">
                <a href="https://voxze.github.io/uiexpert/" className="link" target="_blank">Live</a>
                <a href="https://github.com/VoXzE/uiexpert" className="link" target="_blank">Github</a>
              </div>
            </div>

            <div className="project">
              <img src={require("./assets/site3.png")} className="project-thumb" alt="project-thumb" />
              <div className="links">
                <a href="https://voxze.github.io/betskinsgg" className="link" target="_blank">Live</a>
                <a href="https://github.com/VoXzE/betskinsgg" className="link" target="_blank">Github</a>
              </div>
            </div>


            <div className="project">
              <img src={require("./assets/site4.gif")} className="project-thumb" alt="project-thumb" />
              <div className="links">
                <a href="https://voxze.github.io/clip-viewer" className="link" target="_blank">Live</a>
                <a href="https://github.com/VoXzE/clip-viewer" className="link" target="_blank">Github</a>
              </div>
            </div>

          </div>
        </div>

        <div className="contact" ref={contactRef}>
          <label style={{ fontSize: 18, margin: 0 }}>- Contact Me</label>
          <div className="info">
            <p>If you are looking for freelance services feel free to contact me via email *Serious Inquiries only*</p>
            <button className="contact-btn" onClick={() => opemEmail()}>Contact</button>
          </div>
        </div>

        <div className="footer">
          Copyright © 2000-2020 - All Rights Reserved
        </div>

      </div>
    </React.Fragment>
  )
};

export default App;
