import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import Header from "../Header";

export default function AboutPage() {
  return (
    <div >
      {/* <Header title={"About"} /> */}
      <div className="about">
        <Card>
          <h1>About Page</h1>
          <p>
            This is a React app for giving feedbacks for a product or a sevice
          </p>
          <p>Version: 1.0.0</p>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
