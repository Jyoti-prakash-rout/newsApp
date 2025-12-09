import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import { useNewsContext } from "../context/NewsContext";
import Loader from "../components/Loader";

const News = ({ className }) => {
  const { news, setNews, fetchNews, loading } = useNewsContext();
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-24">
        <Loader />
      </div>
    );
  }
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
