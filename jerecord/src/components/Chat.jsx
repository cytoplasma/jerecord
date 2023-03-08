import React from "react";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <h4>community chatroom</h4>
        <div className="trackers">
          <span>members: 0</span>
          <span>messages: 0</span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
