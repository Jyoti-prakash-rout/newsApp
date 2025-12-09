import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import { useNewsContext } from "../context/NewsContext";

const News = ({ className }) => {
  const { news, setNews, fetchNews } = useNewsContext();
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);
  return (
    <>
      <Wrapper>
        <div className={`grid grid-cols-4 gap-6 ${className} `}>
          {news.map((newsDetails) => {
            if (!newsDetails.urlToImage) return null;
            return <Card details={newsDetails} key={newsDetails.url} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default News;
