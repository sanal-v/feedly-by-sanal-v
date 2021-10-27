import { Pane } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2";
import { Checkbox } from "@bigbinary/neetoui/v2";
import { Check, } from "@bigbinary/neeto-icons";


const ShowFilter = ({ showFilter, setShowFilter }) => {
  return (
    <Pane isOpen={showFilter} onClose={() => setShowFilter(false)}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Filter Articles
        </Typography>
      </Pane.Header>
      <Pane.Body>
      <Typography style="h4" className="text-gray-600">Category</Typography>
        <div>
            <Checkbox className="p-5" id="filter" label="All" />
            <Checkbox className="p-5" id="filter" label="National" />
            <Checkbox className="p-5" id="filter" label="World" />
            <Checkbox className="p-5" id="filter" label="Business" />
            <Checkbox className="p-5" id="filter" label="Sports" />
            <Checkbox className="p-5" id="filter" label="Technology" />
        </div>
      </Pane.Body>
      <Pane.Footer className="flex items-center space-x-2">
        <Button
          size="large"
          label="Save Changes"
          icon={Check}
          onClick={() => setShowFilter(false)}
        />
        <Button
          style="text"
          size="large"
          label="Cancel"
          onClick={() => setShowFilter(false)}
        />
      </Pane.Footer>
    </Pane>
  );
};

export default ShowFilter;
