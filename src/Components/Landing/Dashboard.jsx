import axios from "axios";
import { useState, useEffect } from "react";
import { PageLoader } from "@bigbinary/neetoui/v2";

import useFetch from "../Fetch";
import SubSection from "./SubSection";
import MainSection from "./MainSection";

const Dashboard = ({ category }) => {
  const [allNews, setAllNews] = useState();
  const { news, loading } = useFetch(
    `https://inshortsapi.vercel.app/news?category=${category}`
  );

  if (loading)
    return (
      <div className="py-10 mt-20">
        <PageLoader />
      </div>
    );

  return (
    <>
      {news && news.data[0] && (
        <div className="ml-40 mr-40 mt-5 border-b-2 pb-5">
          <MainSection news={news} />
          <SubSection news={news} list={[1, 2, 3, 4]} />
        </div>
      )}
    </>
  );
};

export default Dashboard;
