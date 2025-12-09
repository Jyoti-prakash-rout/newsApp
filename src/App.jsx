import React from "react";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Category from "./components/Category";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col overflow-hidden">
        <div className="sticky top-0 z-50 bg-base-200">
          {" "}
          <Navbar />
        </div>
        <div className="sticky top-16 z-40 bg-base-100">
          {" "}
          <Category className="py-10" />
        </div>
        <div className="flex-1 overflow-y-auto mt-5 mb-10">
          <News className="pb-10" />
        </div>

        <Footer className="fixed bottom-0 left-0 w-full" />
      </div>
    </>
  );
};

export default App;
