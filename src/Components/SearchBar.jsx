import React from "react";
import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Input } from "@bigbinary/neetoui/v2";
import { Search } from "@bigbinary/neeto-icons";
import { FilterContext } from "../App";
import axios from "axios";

function SearchBar({ showSearch, setShowSearch }) {
  

  if (showSearch !== true) return null;
  return ReactDOM.createPortal(
    <div>
      <div
        className="bg-gray-700 fixed top-0 bottom-0 left-0 right-0 opacity-70"
        onClick={() => setShowSearch(false)}
      ></div>
      <div className="fixed top-80 w-full h-full">
        <Input className="mx-80" size="medium" prefix={<Search size={20} />} />
        {/* {console.log(allNews)} */}
      </div>
    </div>,
    document.getElementById("search-root")
  );
}

export default SearchBar;
