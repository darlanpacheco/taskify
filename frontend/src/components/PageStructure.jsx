import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageStructure = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageStructure;
