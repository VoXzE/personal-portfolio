import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="left-nav">
        <div className="logo"><span>Jeremiah</span> Flores</div>
        <ul className="navigation-links">
          <li className="navigation-item active">Projects</li>
          <li className="navigation-item">Reviews</li>
          <li className="navigation-item">Hire</li>
        </ul>
      </div>
      <ul className="navigation-social">
        <li className="navigation-item"><FontAwesomeIcon icon={faTwitter} /> Twitter</li>
        <li className="navigation-item"><FontAwesomeIcon icon={faGithub} /> Github</li>
      </ul>
    </div>
  )
}

export default Navigation;