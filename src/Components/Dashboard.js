import {useEffect,useState} from "react"
import axios from "axios"
import useFetch from "./useFetch";

const Dashboard = ({category}) => {

  const {news,loading} = useFetch(`https://inshortsapi.vercel.app/news?category=${category}`)

  console.log(news)
  // console.log(news.data[1])
  // let news&& news.data[0]= news&& news.data[0]
  // return(<div>hello</div>)
  return(
    <>
    {news&& news.data[0] && 
    <div className="ml-40 mr-10 mt-5 border-b-2">
      <div >
        <h1>{news.category.charAt(0).toUpperCase() + news.category.slice(1)} News</h1>
        <br />
        <div className="flex border-b-2 pb-4">
          {/* <img src="https://picsum.photos/526/263" alt="something" /> */}
          <img className="w-2/5 h-72" src={news.data[0]?.imageUrl} alt="something" />
          <div className = "ml-5 flex-col">
            {/* <div className = "font-bold text-xl" >
              {news&& news.data[0]?.title}
              <br />
            </div> */}
            <h3>{news&& news.data[0]?.title}</h3>
            <div className="text-right text-gray-500">
              {news&& news.data[0]?.author} at {news&& news.data[0]?.time} on {news&& news.data[0]?.date}
              <br /><br />
            </div>
            <div>
              {news&& news.data[0]?.content}
              <br /><br />
            </div>
            <a href="#" className="text-purple-500">Read more</a>
          </div>
        </div>
      </div>
      
      <div className="flex-col">
        <div className="flex justify-between pt-6">
          <div className="flex ">
            {/* <img classnName="w-2/5" src={news.data[0]?.imageUrl} alt="something" /> */}
            <img src="https://picsum.photos/84/84" alt="something" />
            <div className="ml-3">
              <div className="font-bold">{news&& news.data[0].title}</div>
              <br />
              <div className="text-gray-500">{news&& news.data[0]?.author} at {news&& news.data[0]?.time} on {news&& news.data[0]?.date}</div>
              <br />
              <div>Read more</div>
            </div>
          </div>
          <div className="flex">
            <img src ="https://picsum.photos/84/84" alt="something" />
            <div className="ml-3">
              <div className="font-bold">{news&& news.data[0].title}</div>
              <br />
              <div className="text-gray-500">{news&& news.data[0]?.author} at {news&& news.data[0]?.time} on {news&& news.data[0]?.date}</div>
              <br />
              <div>Read more</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-6">
        <div className="flex">
              <img src="https://picsum.photos/84/84" alt="something" />
            <div className="ml-3">
              <div className="font-bold">{news&& news.data[0].title}</div>
              <br />
              <div className="text-gray-500">{news&& news.data[0]?.author} at {news&& news.data[0]?.time} on {news&& news.data[0]?.date}</div>
              <br />
              <div>Read more</div>
            </div>
          </div>
          <div className="flex">
              <img src="https://picsum.photos/84/84" alt="something" />
            <div className="ml-3">
              <div className="font-bold">{news&& news.data[0].title}</div>
              <br />
              <div className="text-gray-500">{news&& news.data[0]?.author} at {news&& news.data[0]?.time} on {news&& news.data[0]?.date}</div>
              <br />
              <div>Read more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
}
    </>
  ) 
};

export default Dashboard;
