import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  //The onclick event call the onChnageColor function when the child div is clicked
  return <div onClick={onChangeColor} //this triggers the parent color change
  className="child" 
  style={{ backgroundColor: "#FFF" }} />;//set initial background Color to white
}

export default Child;
