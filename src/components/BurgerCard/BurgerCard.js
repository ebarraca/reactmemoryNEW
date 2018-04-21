
import React from "react";
import "./BurgerCard.css";

const BurgerCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.id} src={props.image}
      onClick={()=>props.handleClick(props.id)}/>
    </div>
  </div>
);

export default BurgerCard;
