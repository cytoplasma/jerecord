import React from 'react'

const Message = () => {
  return (
    <div className="message">
      <div className="message-wrapper">
        <img className="chat-pfp" src="https://i.pinimg.com/736x/fc/46/81/fc4681b4a454a312f9b98a2d66bd5582.jpg" alt="user" />
        <div className="message-content">
          <div className="message-name">
            this is the username 
            <span className="date-time">12:00pm</span>
          </div>
          <div className="message-content">this is the message</div>
        </div>
      </div>
    </div>
  )
}

export default Message