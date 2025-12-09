import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import api from "../config/axios";

import axios from "axios";
const News = ({ className }) => {
  const fetchNews = async () => {
    const response = await api.get(
      `/everything?q=tesla&apiKey=${import.meta.env.VITE_API_KEY}`
    );
  };
  useEffect(() => {}, []);
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
