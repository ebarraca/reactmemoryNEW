
import React from "react";
import "./JumboTron.css";

const JumboTron = props => (
  <div className="jumboTron text-center">
    {props.children}
  </div>
);

export default JumboTron;
