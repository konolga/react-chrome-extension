import React from "react";
import Cards from "./Cards";
import "./Statistics.css";
import { fetchData } from "./covidAPI";
import covidImage from "../image/Coronavirus.svg";

class Statistics extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async () => {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="statistics-container">
        <img className="covid-img" src={covidImage} alt="COVID-19" />
        <div>
          <h4>{"COVID-19 global statistics:"}</h4>
        </div>
        <Cards data={data} />
      </div>
    );
  }
}

export default Statistics;
