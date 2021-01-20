import React, { Component } from "react";
import { Link } from "react-router-dom";
import fetchHistory from "../background";

class HistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { urls: [] };
  }

  componentDidMount() {
    fetchHistory().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ urls: data });
      }
    });
  }

  renderUrls = (urls) => {
    return (
      <div className="row">
        {urls.map((url) => {
          return <Link to={`${url.link}`} className="btn"></Link>;
        })}
      </div>
    );
  };

  render() {
    const { urls } = this.state;
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">
          {!urls.length ? "Loading..." : "Recent visited sites"}
        </h2>
        {this.renderUrls(urls)}
      </div>
    );
  }
}

export default HistoryComponent;
