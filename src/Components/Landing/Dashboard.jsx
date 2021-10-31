import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { PageLoader } from "@bigbinary/neetoui/v2"

import { FilterContext } from "../../App";
import Fetch from "../Fetch";
import SubSection from "./SubSection";
import MainSection from "./MainSection";

const Dashboard = ({ category }) => {
  const {archived} = useContext(FilterContext)
  const [allNews, setAllNews] = useState();
  const { news, loading } = Fetch(
    `https://inshortsapi.vercel.app/news?category=${category}`
  );
   
  if (loading)
    return (
      <div className="py-10 mt-20">
        <PageLoader />
      </div>
    );
  
  const today = new Date().toDateString()
  const todaysData = news.data.filter(each => new Date(each?.date.slice(0,11)).toDateString()===today)
  const newsToday ={category:news.category,data:todaysData}
  // console.log("archived=",archived.archived)
  const sendNews= archived.archived ? news:newsToday
  

  return (
    <>
      
        <div className="ml-40 mr-40 mt-5 border-b-2 pb-5">
          <MainSection news={sendNews} />
          <SubSection news={sendNews} n={0}/>
        </div>
     
    </>
  );
};

export default Dashboard;
