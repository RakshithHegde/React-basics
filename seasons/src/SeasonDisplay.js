import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Summertime means it's icecream time" ,
    iconName : 'sun'
  },
  winter: {
    text: "Winter is coming",
    iconName : 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  //console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]  //{text, iconName}
 // const text = season === "winter" ? "Its chilly out here" : "Its beach time";
  //const icon = season === "winter" ? "snowflake" : "sun";
  //console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h2>{text}</h2>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};
export default SeasonDisplay;
