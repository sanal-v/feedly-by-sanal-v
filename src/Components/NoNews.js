import React, { useState } from "react";
import { Button } from "@bigbinary/neetoui/v2";
import noNews from "../Pictures/Group.png";
import { Edit } from "@bigbinary/neeto-icons";
import SubSection from "./Landing/SubSection";
import useFetch from "./useFetch";
import { Modal } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2";
import { Textarea } from "@bigbinary/neetoui/v2";

function NoNews() {
  const [showFeedback, setShowFeedback] = useState(false);
  const { news, loading } = useFetch(
    `https://inshortsapi.vercel.app/news?category=all`
  );

  return showFeedback ? (
    <div>
      <Modal
        isOpen={showFeedback}
        closeButton={false}
        onClose={() => setShowFeedback(false)}
        size="md"
      >
        <Modal.Body className="mt-5">
          <div className="mt-8 ml-auto mr-auto">
            <br />
            <p className="font-bold text-2xl">Can't find what you came for?</p>
            <br />
            <p className="">
              Write to us about which category interests you and we will fetch
              them for you daily, for free.
            </p>
            <br />
            <div className="flex">
                <Input className="pr-5"label="Name" placeholder="Oliver Smith" />
                <Input label="Email" placeholder="oliver@example.com" />
            </div>
            <Textarea className="pt-5" label="Message" placeholder="Write your message here." />
          </div>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Submit"
            onClick={() => setShowFeedback(false)}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowFeedback(false)}
          />
        </Modal.Footer>
      </Modal>
    </div>
  ) : (
    <div className="ml-40 mr-40 mt-5 border-b-2 pb-5">
      <div className="mt-10 flex flex-col items-center border-b-2 pb-5">
        <img className="ml-auto mr-auto mt-10 " src={noNews} />
        <h1 className="text-center mt-5">No news articles found</h1>
        <div className="mt-5">
          <Button
            className=""
            icon={Edit}
            label="Write to us"
            onClick={() => setShowFeedback(!showFeedback)}
            style="secondary"
            size="large"
            iconPosition="left"
          />
        </div>
      </div>
      <div>
        <SubSection news={news} list={[0, 1, 2, 3, 4, 5]} />
      </div>
    </div>
  );
}

export default NoNews;
