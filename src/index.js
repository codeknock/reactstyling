import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();
const customStyle = {
  color: ""
};
let greeting;

if (currentTime < 12) {
  greeting = "morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "afternoon";
  customStyle.color = "green";
} else {
  greeting = "goodnight";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,

  document.getElementById("root")
);
//import react from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
