import { Pane } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2";
import { Checkbox } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import {useState,useContext} from "react"
import Home from "./Home";
import {Link } from "react-router-dom"

import { FilterContext } from "../App";


const ShowFilter = ({ showFilter, setShowFilter }) => {

  const allCategories = ["all","national","business","sports","world","politics","technology","startup","entertainment","miscellaneous","science","automobile"]
  const {categories, setCategories,filter,setFilter}= useContext(FilterContext)
  let temp = {}

  const handleSave =() =>{
    let selected = Object.keys(categories).filter(key => categories[key]==true)
    setFilter(selected)
  }
  
  const handleCheck = (e) => {
    setCategories({...categories,[e.target.name]:e.target.checked})
  };

  const revertChanges = () =>{
    filter.map(topic =>{
      temp={...temp,[topic]:true}
    })
    setCategories({...temp})
  }
 
  return (
    <Pane isOpen={showFilter} onClose={()=>{setShowFilter(false);revertChanges()}}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Filter Articles
        </Typography>
      </Pane.Header>
      <Pane.Body>
        <Typography style="h4" className="text-gray-600">
          Category
        </Typography>
        <div>
          {allCategories.map(cat =>(
            <Checkbox
            key = {cat}
            className="p-5"
            id="filter"
            label={cat.charAt(0).toUpperCase() + cat.slice(1)}
            name={cat}
            checked={categories[cat]||false}
            onChange={handleCheck}
          />
          ))}
           <Checkbox
            // key = {cat}
            className="p-5"
            id="filter"
            label="Archived"
            name="Archived"
            // checked={categories[cat]||false}
            onChange={handleCheck}
            />
        </div>
      </Pane.Body>
      <Pane.Footer className="flex items-center space-x-2">
      <Link to ={{pathname: "/"}}>
        <Button
          size="large"
          label="Save Changes"
          icon={Check}
          onClick={() => {setShowFilter(false);handleSave()}}
        />
      </Link>
        <Button
          style="text"
          size="large"
          label="Cancel"
          onClick={() => {setShowFilter(false);revertChanges()}}
        />
      </Pane.Footer>
    </Pane>
  );
};

export default ShowFilter;
