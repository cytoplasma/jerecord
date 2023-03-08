import React from "react";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <h4>welcome to jerecord!</h4>
        <div className="trackers">
          <span>members: 1,000,000</span>
          <span>messages: 1,000,000</span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
