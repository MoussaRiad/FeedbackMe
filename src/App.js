import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutPage from "./components/pages/AboutPage";
import Header from "./components/Header";
import Icon from "./components/Icon";
import { FaQuestion } from "react-icons/fa";
import { FeedbackProvider } from "./context/FeedbackProvider";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="body">
          <Header title={"Feed Back Me!"} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
          <Icon type={"about"} link={"/about"}>
            <FaQuestion size={30} />
          </Icon>
        </div>
      </Router>
    </FeedbackProvider>
  );
}
