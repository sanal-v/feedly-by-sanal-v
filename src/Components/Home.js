import Dashboard from "./Landing/Dashboard";
import ShowFilter from "./ShowFilter";
import { useContext, useEffect } from "react";
import { FilterContext } from "../App";
import { Tag } from "@bigbinary/neetoui/v2";

const Home = () => {
  let { filter, setFilter } = useContext(FilterContext);
  
  const handleClose=({category}) =>{
    console.log(category,"closed")
  }
  return (
    <div>
      <div className="ml-40 mr-40 mt-5">
        {filter.map(category => (
          <Tag
            className="mr-5"
            label={category.charAt(0).toUpperCase() + category.slice(1)}
            onClose={handleClose}
          />
        ))}
      </div>
      {filter.map(category => (
        <Dashboard category={category} />
      ))}
    </div>
  );
};

export default Home;
