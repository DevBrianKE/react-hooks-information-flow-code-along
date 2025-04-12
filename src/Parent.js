import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  //inital color setup using the getRandomColor function
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); //useState hook to store the parent color
  //the function changes the parent color when called
  function handleChangeColor(){
    const newRandomColor = getRandomColor() //Get a new random color
    setColor(newRandomColor) //update the parent color state
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/* Pass the handleChangeColor function to each Child component as a prop */}
      <Child onChangeColor={handleChangeColor}/>
      <Child onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
