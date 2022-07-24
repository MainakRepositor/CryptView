import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Loader from '../components/Loader';

const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;
