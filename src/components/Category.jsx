import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({ className }) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const { setNews, fetchNews } = useNewsContext();

  const handleClick = async (e) => {
    const cat = e.target.value;
    const data = await fetchNews(`/everything?q=${cat}`);
    setNews(data.articles);
  };
  return (
    <>
      <Wrapper>
        <div
          className={`max-w-full w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5  ${className} `}>
          {categories.map((category) => (
            <button
              key={category}
              className="btn btn-primary"
              onClick={handleClick}
              value={category}>
              {" "}
              {category}{" "}
            </button>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Category;
