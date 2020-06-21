import React from "react";
import "./assets/css/main.scss";
import Navigation from "./components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faJs, faNodeJs, faVuejs, faPython } from "@fortawesome/free-brands-svg-icons";

const App = () => {

  return (
    <div className="container">
      
      <Navigation />

      <div className="header">
      
        <div className="introduction">
          <h1>Hello! I'm Jeremiah</h1>
          <p>
            I'm a 20-year old, self-taught software engineer currently located in Philadelphia. 
            I currently have plans to receive a degree in computer science to further educate my self in this field. 
            I've been developing different software applications over the last 5 years. 
            I am fluent in many technologies, I primarily write my frontend applications in React, server side stuff in NodeJS, while using PostgreSQL to handle data management.
          </p>
        </div>

        <div className="expertise">
          <div className="item"><FontAwesomeIcon icon={faNodeJs} /></div>
          <div className="item"><FontAwesomeIcon icon={faVuejs} /></div>
          <div className="item"><FontAwesomeIcon icon={faPython} /></div>
        </div>

      </div>

    </div>
  )
};

export default App;
