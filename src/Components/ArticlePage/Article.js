import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import SubSection from "../Landing/SubSection";
import useFetch from "../useFetch";

const Index = () =>{
	const allNews=useLocation().state
	const news = allNews.news
	const n = allNews.e ? allNews.e : 0
	const list = [0,1,2,3,4]
	list.splice(n,1)
	return(
		<div className=" mx-40 mt-10">
			{news&&(
			<div className="flex-col border-b-2 pb-10">
				<h1 id ="title" className="">
					{news&&news.data[n]?.title}
				</h1>
				<div id="Author" className="pt-5 text-gray-500">{news.data[n]?.author} at {news.data[n]?.time}on {news.data[n]?.date}</div>
				<img className="ml-auto mr-auto pt-5" src="https://picsum.photos/543/304" alt="something"/>
				<div id= "Content" className="pt-5">
					{news.data[n]?.content}
				</div>
				<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas aliquam sagittis. Mauris fringilla justo nunc. Etiam auctor, eros eget semper imperdiet, enim mauris dictum justo, consequat rhoncus ipsum turpis ut quam. Curabitur dapibus sed diam at ullamcorper. Sed dapibus, ex sed posuere blandit, nisl nunc gravida ante, a scelerisque sem mauris at nibh. Vivamus tempus eros mauris, non imperdiet lectus rutrum a. Proin fringilla porta augue ac rutrum. Aenean vel euismod mi. Proin tincidunt lectus arcu, id consectetur nunc congue sed. Morbi tincidunt sollicitudin tristique. Nullam vel sapien pulvinar urna dapibus feugiat. Curabitur sit amet tristique diam.

				Fusce lacinia ullamcorper massa, et efficitur quam cursus vel. Aliquam erat volutpat. Vivamus nisl tellus, tincidunt ullamcorper turpis non, aliquam congue lacus. Donec quis sem ut enim tincidunt ullamcorper quis ut quam. Etiam egestas nec odio sed mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas sagittis at neque non finibus. Sed magna eros, suscipit non neque at, faucibus fringilla purus. Curabitur a ipsum non ante sollicitudin sagittis et id velit. Vestibulum blandit vel eros egestas sodales. Suspendisse lobortis imperdiet augue, a porttitor sem aliquet nec. Curabitur non sem vitae dui commodo ullamcorper ut gravida urna. Ut ut magna in risus tincidunt ultrices.		
				</div>
			</div>
			)}
			<SubSection news={news} list={list}/>
		</div>
	)
}

export default Index