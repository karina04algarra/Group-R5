import React from "react";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import Form from "../components/Form";
import "../assets/styles/components/Background.css";

const Background = () => (
  <>
    <Header />
    <div className="general_container">
      <div className="general__container-back">
        <ProgressBar />
        <Form />
      </div>
    </div>
  </>
);

export default Background;
