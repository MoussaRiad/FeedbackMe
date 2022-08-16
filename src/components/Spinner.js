import React from "react";
import spinner from "../assets/loading_1.gif";
export default function Spinner() {
  return (
    <>
      <img className="img-loading" src={spinner} alt="Loading ..." />
      <h1 style={{'color':'white'}}>Loading</h1>
    </>
  );
}
