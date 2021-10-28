import { Pane } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2";
import { Checkbox } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import {useState,useContext} from "react"
import Home from "./Home";
import { FilterContext } from "../App";
import {Link } from "react-router-dom"


const ShowFilter = ({ showFilter, setShowFilter }) => {
  
  const [categories, setCategories] = useState({
    "national":true,
    "world":true,
    "business":true,
    "sports":true
  });
  
  const {filter,setFilter}= useContext(FilterContext)

  const handleSave =() =>{
    let selected = Object.keys(categories).filter(key => categories[key]==true)
    setFilter(selected)
  }

  const handleCheck = (e) => {
    setCategories({...categories,[e.target.name]:e.target.checked})
  };
  console.log(filter)

  return (
    <Pane isOpen={showFilter} onClose={() => setShowFilter(false)}>
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
          <Checkbox
            className="p-5"
            id="filter"
            label="All"
            name="all"
            checked={categories["all"]||false}
            onChange={handleCheck}
          />
          <Checkbox
            className="p-5"
            id="filter"
            label="Science"
            name="science"
            checked={categories["science"]||false}
            onChange={handleCheck}
          />
          <Checkbox
            className="p-5"
            id="filter"
            label="Business"
            name="business"
            checked={categories["business"]||false}
            onChange={handleCheck}
          />
          <Checkbox
            className="p-5"
            id="filter"
            label="National"
            name="national"
            checked={categories["national"]||false}
            onChange={handleCheck}
          />
          <Checkbox
            className="p-5"
            id="filter"
            label="Sports"
            name="sports"
            checked={categories["sports"]||false}
            onChange={handleCheck}
          />
          <Checkbox
            className="p-5"
            id="filter"
            label="World"
            name="world"
            checked={categories["world"]||false}
            onChange={handleCheck}
          />
          <Checkbox
            className="p-5"
            id="filter"
            label="Technology"
            name="technology"
            checked={categories["technology"]||false}
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
          onClick={() => setShowFilter(false)}
        />
      </Pane.Footer>
    </Pane>
  );
};

export default ShowFilter;
