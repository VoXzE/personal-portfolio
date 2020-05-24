import React from "react";

const PreviousWork = () => {
  const dummy = [1, 2, 3, 4, 5, 6];
  return (
    <div className="portfolio">
      {dummy.map(() => (
        <div className="portfolio-site">
          <img src={require("../../assets/site1.png")} className="site-thumbnail"/>
          <div className="site-info">
            <div className="site-name">Mo-Project</div>
            <div className="site-links">
              <a>Live</a>
              <a>Github</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PreviousWork;