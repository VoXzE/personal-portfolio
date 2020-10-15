import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

interface NavigationPropsInterface {
  moveToProjects: () => void;
  moveToContact: () => void;
}

const Navigation = (props: NavigationPropsInterface) => {
  return (
    <div className="navigation">
      <div className="left-nav">
        <div className="logo"><span>Jeremiah</span> Flores</div>
        <ul className="navigation-links">
          <li className="navigation-item" onClick={() => props.moveToProjects()}>Projects</li>
          <li className="navigation-item" onClick={() => props.moveToContact()}>Contact</li>
        </ul>
      </div>
      <ul className="navigation-social">
        <a href="https://twitter.com/VoXzE_" target="_blank"><li className="navigation-item"><FontAwesomeIcon icon={faTwitter} /> Twitter</li></a>
        <a href="https://github.com/VoXzE" target="_blank"><li className="navigation-item"><FontAwesomeIcon icon={faGithub} /> Github</li></a>
      </ul>
    </div>
  )
}

export default Navigation;