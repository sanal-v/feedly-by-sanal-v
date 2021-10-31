import { useState, useEffect } from "react";
import axios from "axios";

const Fetch = url => {
  const [news, setNews] = useState();
  
  const [loading, setLoading] = useState(true);

  const fetchNews = async url => {
    const res = await axios(url);
    const apiData = await res.data;
    setNews(apiData);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(url);
  }, [url]);

  return { news, loading };
};

export default Fetch;
