import React, { useCallback } from "react";
import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Input } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { debounce } from "lodash";

import { FilterContext } from "../App";

function SearchBar({ showSearch, setShowSearch }) {
  const [allNews, setAllNews] = useState({});
  const [apiData, setApiData] = useState({});
  const [searchedNews, setSearchedNews] = useState();

  const debou = useCallback(
    debounce(val => setSearchedNews(val), 500),
    []
  );

  let news = {};
  let e = 0;

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
        className="bg-black fixed top-0 bottom-0 left-0 right-0 opacity-80"
        onClick={() => {setShowSearch(false); setSearchedNews()}}
      ></div>
      <div className="fixed top-80 w-full h-full">
        <Input
          className="mx-80"
          size="medium"
          prefix={<Search size={20} />}
          onChange={e => debou(e.target.value)}
          nakedInput={true}
        />
        {searchedNews && (
          <div className="text-cente mx-80 overflow-y-auto max-h-80">
            {filter
              .flatMap(category => {
                return allNews[category].data.filter(news => {
                  let temp = news.title
                    .toLowerCase()
                    .includes(searchedNews.toLowerCase());
                  if (temp) {
                    news.category = category;
                    return news;
                  }
                  return null;
                });
              })
              .map(item => {
                news = allNews[item.category];
                e = allNews[item.category].data.indexOf(item);
                return (
                  <div
                    className="p-3 bg-white "
                    onClick={() => {setShowSearch(false); setSearchedNews()}}
                  >
                    <Link to={{ pathname: `/article/${news.data[e].url.split("/").slice(-1)}`, state: { news, e } }}>
                      <div className=" rounded-lg p-3 pl-10 hover:bg-purple-600 hover:text-white bg-gray-200 text-bold">
                        {item.title}
                      </div>
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
