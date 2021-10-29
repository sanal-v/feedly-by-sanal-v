import {Link } from "react-router-dom"

const SubSection = ({ news,list }) => {
  return (
    <div className="grid grid-cols-2 gap-x-28">
      {list.map(e => (
        <div className="flex pt-4">
          <img className="h-20 w-20" src="https://picsum.photos/84/84" alt="something" />
          <div className="ml-3">
            <div className="font-bold">{news && news.data[e].title}</div>
            <div className="text-gray-500 my-1">
              {news && news.data[e]?.author} at {news && news.data[e]?.time} on{" "}
              {news && news.data[e]?.date}
            </div>
            <Link to ={{pathname: "./article", state:{news,e}}}>
                Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubSection;