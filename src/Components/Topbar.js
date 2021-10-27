import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button } from "@bigbinary/neetoui/v2";
import { Tooltip } from "@bigbinary/neetoui/v2";
import {useState} from "react"
import ShowSubscibe from "./ShowSubscribe";
import ShowFilter from "./ShowFilter"

const Topbar = () => {
  const [showSubscibe, setShowSubscribe] = useState(false)
  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className="pl-6 pr-6 divide-y border-b-8">
      <Header
        actionBlock={
          <>
            <Button
              className="mr-2"
              icon={() => <Search />}
              style="t"
              tooltipProps={{
                content: "Search",
                placement: "bottom"
              }}
            />
            <Button
              className="mr-2"
              icon={() => <Notification size={24} />}
              style="t"
              tooltipProps={{
                content: "Notification",
                placement: "bottom"
              }}
              onClick={() => setShowSubscribe(!showSubscibe)}
            />
            
            <Button
              label="Filter"
              onClick={function noRefCheck() {}}
              style="secondary"
              icon={Filter}
              onClick ={() => setShowFilter(!showFilter)}
            />
          </>
        }
        title="Feed.ly"
      />
      <ShowSubscibe showSubscibe={showSubscibe} setShowSubscribe={setShowSubscribe}/>
      <ShowFilter showFilter={showFilter} setShowFilter={setShowFilter} />
    </div>
  );
};

export default Topbar;
