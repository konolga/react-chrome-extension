import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import "./Statistics.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  let cardDetails = [
    {
      style: "infected",
      text: "Infected",
      value: confirmed.value,
      lastUpdate: lastUpdate,
    },
    {
      style: "recovered",
      text: "Recovered",
      value: recovered.value,
    },
    {
      style: "deaths",
      text: "Deaths",
      value: deaths.value,
    },
  ];
  return (
    <div className="cards-container">
      <Grid container>
        {cardDetails.map((detail, index) => (
          <Grid
            item
            xl={6}
            md={6}
            sm={12}
            xs={12}
            component={Card}
            className={detail.style}
            key={index}
          >
            <CardContent className="cards-content">
              <div>
                <b>{detail.text}</b>
              </div>
              <CountUp
                start={0}
                end={detail.value}
                duration={2}
                separator=","
              />
              <div>
                {`Last Updated at `}
                {new Date(lastUpdate).toLocaleTimeString()}
              </div>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
