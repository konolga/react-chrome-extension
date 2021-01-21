import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <form
        method="get"
        title="Search Form"
        action="https://cse.google.com/cse?cx"
      >
        <div className="search-container">
          <input
            type="text"
            id="q"
            name="q"
            title="Search this site"
            alt="Search Text"
            maxLength="256"
          />
          <input type="hidden" id="cx" name="cx" value="7b53b921b9d8f69bb" />
        </div>
      </form>
    );
  }
}

export default SearchBar;
