import React from "react";

import Discount from "../components/Discount";
import Information from "../components/Information";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Information />
      <Discount />
    </div>
  );
};

export default Home;
