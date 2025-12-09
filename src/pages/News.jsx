import React from "react";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";

const News = ({ className }) => {
  return (
    <>
      <Wrapper>
        <div className={`grid grid-cols-4 gap-6 ${className} `}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Wrapper>
    </>
  );
};

export default News;
