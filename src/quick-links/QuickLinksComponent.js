import React, { Component } from "react";
import "./QuickLinksComponent.css";

class QuickLinksComponent extends Component {
  render() {
    let links = ["www.gmail.com", "www.youtube.com", "www.yahoo.com"];
    let names = ["Gmail", "Youtube", "Yahoo"];
    return links.map((link, index) => {
      return (
        <div className="column" key={index}>
          <a
            href={`http://${link}`}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            {names[index]}
          </a>
        </div>
      );
    });
  }
}

export default QuickLinksComponent;
