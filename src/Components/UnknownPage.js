import React from "react";
import { Button } from "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";
import { Link } from "react-router-dom";

import unknownPic from "../Pictures/Unknown.png";

function UnknownPage() {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full">
      <img src={unknownPic} />
      <h1 className="mt-5 text-center max-w-lg">You have landed somewhere unknown.</h1>
      <Link to={{ pathname: "/" }}>
        <Button
          className="mt-5"
          icon={Home}
          label="Take me home"
          style="secondary"
          size="large"
          iconPosition="left"
        />
      </Link>
    </div>
  );
}

export default UnknownPage;
