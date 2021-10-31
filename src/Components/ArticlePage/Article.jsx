import { useLocation } from "react-router-dom";
import { Copy } from "@bigbinary/neeto-icons";
import { Toastr } from "@bigbinary/neetoui/v2";
import { useParams } from "react-router-dom";
import { PageLoader } from "@bigbinary/neetoui/v2";


import SubSection from "../Landing/SubSection";
import UnknownPage from "../UnknownPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Fetch from "../Fetch";


const Index = () => {
  const { slug, category } = useParams();
  const allNews = useLocation().state;
  
  const {news,loading} = Fetch(
    `https://inshortsapi.vercel.app/news?category=${category}`
  );
  const data =
    news &&
    news.data.map(ele => ele.url.split("/").slice(-1).join());

  const p = data && data.indexOf(slug);

  if (p === -1) return <UnknownPage />;
  if (loading)
    return (
      <div className="mt-60">
        <PageLoader />
      </div>
    );
  const n = p;
  const list = [0, 1, 2, 3, 4];
  list.splice(n, 1);
//   console.log("n=",n);

  const copyUrl = url => {
    navigator.clipboard.writeText(url);
  };


  return (
    <div className=" mx-40 mt-10 border-b-2 pb-5">
      <ToastContainer />
      {news && (
        <div className="flex-col border-b-2 pb-10">
          <h1 id="title" className="">
            {news && news.data[n]?.title}
            <span> </span>
            <Copy
              className="inline-block text-gray-500 cursor-pointer"
              onClick={() => {
                Toastr.success("Url copied to clipboard!");
                copyUrl(news.data[n]?.readMoreUrl);
              }}
            />
          </h1>
          <div id="Author" className="pt-5 text-gray-500">
            {news.data[n]?.author} at {news.data[n]?.time}on{" "}
            {news.data[n]?.date}
          </div>
          <img
            className="ml-auto mr-auto pt-5"
            src="https://picsum.photos/543/304"
            alt="something"
          />
          <div id="Content" className="pt-5">
            {news.data[n]?.content}
          </div>
          <br />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas aliquam sagittis. Mauris fringilla justo nunc. Etiam auctor,
            eros eget semper imperdiet, enim mauris dictum justo, consequat
            rhoncus ipsum turpis ut quam. Curabitur dapibus sed diam at
            ullamcorper. Sed dapibus, ex sed posuere blandit, nisl nunc gravida
            ante, a scelerisque sem mauris at nibh. Vivamus tempus eros mauris,
            non imperdiet lectus rutrum a. Proin fringilla porta augue ac
            rutrum. Aenean vel euismod mi. Proin tincidunt lectus arcu, id
            consectetur nunc congue sed. Morbi tincidunt sollicitudin tristique.
            Nullam vel sapien pulvinar urna dapibus feugiat. Curabitur sit amet
            tristique diam.
          </div>
          <br />
          <div>
            Fusce lacinia ullamcorper massa, et efficitur quam cursus vel.
            Aliquam erat volutpat. Vivamus nisl tellus, tincidunt ullamcorper
            turpis non, aliquam congue lacus. Donec quis sem ut enim tincidunt
            ullamcorper quis ut quam. Etiam egestas nec odio sed mollis.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Maecenas sagittis at neque non finibus. Sed
            magna eros, suscipit non neque at, faucibus fringilla purus.
            Curabitur a ipsum non ante sollicitudin sagittis et id velit.
            Vestibulum blandit vel eros egestas sodales. Suspendisse lobortis
            imperdiet augue, a porttitor sem aliquet nec. Curabitur non sem
            vitae dui commodo ullamcorper ut gravida urna. Ut ut magna in risus
            tincidunt ultrices.
          </div>
        </div>
      )}
      <SubSection news={news} n={n} />
    </div>
  );
};

export default Index;
