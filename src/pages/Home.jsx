import React from "react";

import Discount from "../components/Discount";
import Information from "../components/Information";
import Header from "../components/Header";
import "../assets/styles/pages/Home.css";
import "../assets/styles/components/Background.css";

const Home = () => (
  <>
    <Header />
    <div class="general_container">
      <div class="general__container-back">
        <Information />
      </div>
    </div>
  </>
);

export default Home;
