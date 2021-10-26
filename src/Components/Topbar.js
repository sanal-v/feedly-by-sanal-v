import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button } from "@bigbinary/neetoui/v2";
import { Tooltip } from "@bigbinary/neetoui/v2";

const Topbar = () => {
  return (
    <div className="pl-6 pr-6 divide-y">
      <Header
        actionBlock={
          <>
            <Tooltip placement={"bottom"} content={"Seach"}>
               <Search size={24} />
            </Tooltip>
            <Notification size={24} />
            <Button
              label="Filter"
              onClick={function noRefCheck() {}}
              style="secondary"
              icon = {Filter}
            />
          </>
        }
        title="Feed.ly"
      />
    </div>
  );
};

export default Topbar;
