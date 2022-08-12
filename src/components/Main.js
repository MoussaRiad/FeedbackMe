import React, { useState } from "react";
import ListItem from "./ListItem";
import FeedBackStats from "./FeedBackStats";
import RateForm from "./RateForm";
export default function Main() {
  
  return (
    <div className="main">
      <RateForm />
      <FeedBackStats />
      <ListItem />
      {/* <Card><p>Hello</p></Card> */}
    </div>
  );
}
