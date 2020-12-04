import React from "react";
import Information from "../components/Information";
import Header from "../components/Header";
import "../assets/styles/components/Background.css";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <Header />
    <div class="general_container">
      <div class="general__container-back">
        <Information />
        <Footer />
      </div>
    </div>
  </>
);

export default Home;