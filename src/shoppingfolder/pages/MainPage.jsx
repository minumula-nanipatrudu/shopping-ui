import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collectoins from "../components/Collectoins";
import Footer from "../components/Footer";

import { Gents, Ladies } from "../data";
import WomenCollections from "../components/WomenCollections";
const MainPage = () => {
  const [gents, setGents] = useState(Gents);

  const [ladies, setLadies] = useState(Ladies);
  console.log(Gents);
  return (
    <div>
      <Header />
      <Banner />
      <Collectoins gents={gents} />
      <WomenCollections ladies={ladies} />
      <Footer />
    </div>
  );
};

export default MainPage;
