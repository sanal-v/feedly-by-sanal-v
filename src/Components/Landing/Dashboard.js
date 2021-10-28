import axios from "axios";
import useFetch from "../useFetch";
import SubSection from "./SubSection";
import MainSection from "./MainSection";

const Dashboard = ({ category }) => {
  const { news, loading } = useFetch(
    `https://inshortsapi.vercel.app/news?category=${category}`
  );
  return (
    <>
      {news && news.data[0] && (
        <div className="ml-40 mr-40 mt-5 border-b-2">
          <MainSection news={news} />
          <SubSection news={news} />
        </div>  
      )}
    </>
  );
};

export default Dashboard;
