import React from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { targetUserId } = useParams();
  console.log(targetUserId);

  return (
    <div className="items-center">
      <h1 className="text-center">Chat</h1>
      <div className="flex">
        <input type="text" className="border border-black" />
        <button className=" ml-4 btn btn-secondary">Send</button>
      </div>
    </div>
  );
};

export default Chat;
