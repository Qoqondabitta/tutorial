import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Home from "../pages";

const Root = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={<React.Fragment>404 Page Not Found</React.Fragment>}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
