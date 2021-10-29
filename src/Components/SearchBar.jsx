import React from "react";
import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Input } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";
import { FilterContext } from "../App";
import axios from "axios";
import { Link } from "react-router-dom";

function SearchBar({ showSearch, setShowSearch }) {
  const [allNews, setAllNews] = useState({});
  const [apiData, setApiData] = useState({});
  const [searchedNews, setSearchedNews] = useState();

  let news= {};
  let e = 0

  let { categories, setCategories, filter, setFilter } =
    useContext(FilterContext);

  const getItem = async topic => {
    const res = await axios.get(
      `https://inshortsapi.vercel.app/news?category=${topic}`
    );
    const data = await res.data;
    setApiData(data);
  };

  useEffect(() => {
    filter.forEach(topic => {
      getItem(topic);
    });
  }, [filter]);

  useEffect(() => {
    setAllNews({
      ...allNews,
      [apiData.category]: apiData
    });
  }, [apiData]);

  if (showSearch !== true) return null;
  return ReactDOM.createPortal(
    <div>
      <div
        className="bg-gray-700 fixed top-0 bottom-0 left-0 right-0 opacity-70"
        onClick={() => setShowSearch(false)}
      ></div>
      <div className="fixed top-80 w-full h-full">
        <Input
          className="mx-80"
          size="medium"
          prefix={<Search size={20} />}
          onChange={e => setSearchedNews(e.target.value)}
          nakedInput={true}
        />
        {searchedNews && (
          <div className="text-center bg-white mx-80 ">
            {filter
              .flatMap(category => {
                return allNews[category].data.filter(news => {
                  let temp = news.title.toLowerCase().includes(searchedNews.toLowerCase());
                  if(temp)  {news.category=category;return news;}
                  return null
                });
              })
              .map(item => {
                news=  allNews[item.category]
                e=allNews[item.category].data.indexOf(item)
                console.log("saaanam",e)
                return (
                  <div className="pt-3" onClick={() => setShowSearch(false)}>
                    <Link to={{ pathname: "./article", state: {news,e}}}>
                    {item.title}
                    </Link>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>,
    document.getElementById("search-root")
  );
}

export default SearchBar;
