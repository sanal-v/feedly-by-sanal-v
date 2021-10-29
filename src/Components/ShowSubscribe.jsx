import { Modal } from "@bigbinary/neetoui/v2";
import { Button } from "@bigbinary/neetoui/v2";
import { Typography } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2";
import subPic from "../Pictures/Subpic.png"
import {useState} from "react"
import axios from "axios"

const ShowSubscibe = ({ showSubscibe, setShowSubscribe }) => {

  const [email, setEmail] = useState({})

  const handleChange = (e) => {
    setEmail({...email,[e.target.name]:e.target.value})
  }


  const handleSignUp = () =>{
    const res = axios.post("https://webhook.site/1cf829a7-7ee2-4529-b864-d8c4ee897224",email)
    setEmail({})
  }

  return (
    <Modal isOpen={showSubscibe} size="xs" closeButton={false} onClose={()=>setShowSubscribe(false)}>
    <Modal.Body className="mt-5">
      <div className = "mt-8 ml-auto mr-auto">
        <img src={subPic} alt= "subpic"/>
        <br />
        <p className="font-bold text-2xl">Subscribe to Feed.ly</p>
        <br />
        <p className="">We don't spam but we deliver the latest news in short</p>
        <br />
      </div>
      <Input placeholder="oliver@example.com" name="email"  onChange={handleChange}/>
    </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          size="large"
          label="Sign Up"
          onClick={() => {setShowSubscribe(false);handleSignUp()}}
        />
        <Button
          style="text"
          size="large"
          label="Cancel"
          onClick={() => setShowSubscribe(false)}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default ShowSubscibe;
