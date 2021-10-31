import Dashboard from "./Landing/Dashboard";
import ShowFilter from "./ShowFilter";
import { useContext, useEffect, useState } from "react";
import { Tag } from "@bigbinary/neetoui/v2";

import { FilterContext } from "../App";
import NoNews from "./NoNews";
import Fetch from "./Fetch";

const Home = () => {
  let { categories, setCategories, filter, setFilter } =
    useContext(FilterContext);

  const handleClose = item => {
    setCategories({ ...categories, [item]: false });
    const changed = filter.filter(ele => ele !== item);
    setFilter(changed);
  };

  return (
    <div>
      {filter.length === 0 ? (
        <div>
          <NoNews />
        </div>
      ) : (
        <div className="ml-40 mr-40 mt-5">
          {filter.map(category => (
            <Tag
              key = {category}
              className="mr-5"
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              onClose={() => handleClose(category)}
            />
          ))}
        </div>
      )}
      {filter.map(category => (
        <Dashboard category={category} />
      ))}
    </div>
  );
};

export default Home;
