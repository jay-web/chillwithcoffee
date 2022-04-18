import * as React from "react";
import CoffeeButton from "./CoffeeButton";


const Banner = (props) => {
  const {clickHandler} = props;
 
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h1>Global coffee</h1>
      <h2>Find your coffee near to you</h2>
      <CoffeeButton href="" buttonText={props.buttonText} onClick={clickHandler} />
    </div>
  );
};

export default Banner;
