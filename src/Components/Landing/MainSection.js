import {Link } from "react-router-dom"
const MainSection =({news})=>{
    return(
          <div>
            <h1>
              {news.category.charAt(0).toUpperCase() + news.category.slice(1)}{" "}
              News
            </h1>
            <br />
            <div className="flex border-b-2 pb-4">
              <img src="https://picsum.photos/526/263" alt="something" />
              {/* <img
                className="w-1/2 h-72"
                src={news.data[0]?.imageUrl}
                alt="something"
              /> */}
              <div className="ml-5 flex-col">
                <h3>{news && news.data[0]?.title}</h3>
                <div className="text-right text-gray-500">
                  {news && news.data[0]?.author} at {news && news.data[0]?.time}
                  on {news && news.data[0]?.date}
                  <br />
                  <br />
                </div>
                <div>
                  {news && news.data[0]?.content}
                  <br />
                  <br />
                </div>
                <Link to ={{pathname: "./article", state:{news}}}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
    )
}

export default MainSection
