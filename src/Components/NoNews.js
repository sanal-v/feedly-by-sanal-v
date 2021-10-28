import React from "react";
import { Button } from "@bigbinary/neetoui/v2";
import noNews from "../Pictures/Group.png";
import { Edit } from "@bigbinary/neeto-icons";
import SubSection from "./Landing/SubSection";
import useFetch from "./useFetch";

function NoNews() {
  const { news, loading } = useFetch(
    `https://inshortsapi.vercel.app/news?category=all`
  );
  return (
    <div className="ml-40 mr-40 mt-5 border-b-2 pb-5">
      <div className="mt-10 flex flex-col items-center border-b-2 pb-5">
        <img className="ml-auto mr-auto mt-10 " src={noNews} />
        <h1 className="text-center mt-5">No news articles found</h1>
        <div className="mt-5">
          <Button
            className=""
            icon={Edit}
            label="Write to us"
            onClick={function noRefCheck() {}}
            style="secondary"
            size="large"
            iconPosition="left"
          />
        </div>
      </div>
        <div>
          <SubSection news={news} list={[0, 1, 2, 3, 4, 5]} />
        </div>
    </div>
  );
}

export default NoNews;
