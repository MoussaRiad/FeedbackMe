import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackProvider";

export default function FeedBackStats() {
  const {feedback} = useContext(FeedbackContext);

  let average= feedback.reduce((acc,cur)=>{
        return (acc+cur.rating);
    },0)/feedback.length;
    average= average.toFixed(1).replace(/[.,]0$/, '');

    return (
    <div className="stats">
      <div className="stat">Number of ratings :{feedback.length}</div>
      <div className="stat">Average of ratings :{isNaN(average)? 0:average}</div>
    </div>
  );
}
