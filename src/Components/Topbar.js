import { Search, Notification, Filter } from "@bigbinary/neeto-icons";
import { Header } from "@bigbinary/neetoui/v2/layouts";
import { Button } from "@bigbinary/neetoui/v2";
import { Tooltip } from "@bigbinary/neetoui/v2";

const Topbar = () => {
  return (
    <div className="pl-6 pr-6 divide-y border-b-2">
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
            />
            
            <Button
              label="Filter"
              onClick={function noRefCheck() {}}
              style="secondary"
              icon={Filter}
            />
          </>
        }
        title="Feed.ly"
      />
    </div>
  );
};

export default Topbar;
