import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Category from "./components/Category";

const App = () => {
  return (
    <>
      <Navbar />
      <Category />
      <News />
    </>
  );
};

export default App;
