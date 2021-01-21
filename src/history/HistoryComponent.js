import React, { Component } from "react";
import "./HistoryComponent.css";

class HistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { urls: [] };
  }

  componentDidMount() {
    let data = [];
    if (chrome && chrome.history) {
      //TODO: chrome history is always undefined here and in background.js
      chrome.history.search({ text: "", maxResults: 5 }, (d) => {
        data = d;
      });
    } else {
      // dummy data to see how component renders
      data.push("google.com", "stackoverflow.com", "medium.com");
    }
    this.setState({ urls: data });
  }

  renderUrls = (urls) => {
    return urls.map((url, index) => {
      return (
        <div className="row">
          <a
            href={`http://${url}`}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {url}
          </a>
        </div>
      );
    });
  };

  render() {
    const { urls } = this.state;
    return (
      <div className="history-container">
        <h4 className="history-container-header">
          {!urls.length ? "Loading..." : "Recently visited sites:"}
        </h4>
        {this.renderUrls(urls)}
      </div>
    );
  }
}

export default HistoryComponent;
