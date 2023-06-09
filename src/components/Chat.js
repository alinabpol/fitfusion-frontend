import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import "../styling/Chat.css"
import "../styling/Button.css"

const Chat = () => {

    // const URL = "http://localhost:8000/api/v1/chat/"
    const URL = "https://fitfusion.herokuapp.com/api/v1/chat/"
    const [messages, setMessages] = useState([])
    const [chatIsOpen, setChatIsOpen] = useState(false)

    const handleMessageSubmit = async (e) => {
        e.preventDefault()
        const userMessage = e.target.message.value


    const updateMessages = [...messages, { content: userMessage, sender: 'You' }];
        setMessages(updateMessages);

        const getResponseFromAI = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ message: userMessage }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const data = await getResponseFromAI.json();
          console.log("data from chat reponse", data.data)
      

    const addResponseToChat = [...updateMessages, { content: data.data, sender: 'Assistant' }];
    setMessages(addResponseToChat);
    console.log("response", addResponseToChat )
    
  }
    const toggleChat = () => {
      setChatIsOpen(!chatIsOpen)
    }

    const closeChat = () => {
      setChatIsOpen(false);
    }


    return (
      <>
      {chatIsOpen ? (
        <div className="chat-container open">
          <button className="close" onClick={closeChat}>
          <FaTimes />
          </button>
            <div className="message-display">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.sender}: {message.content}
                </div>
              ))}
            </div>
              <form 
                className="message-input"
                onSubmit={handleMessageSubmit}>
                  <input 
                    type="text" 
                    className="user-input"
                    name="message" 
                    placeholder="Type your message..." 
                  />
                  <button className="chat-submit"type="submit">Send</button>
              </form>
            </div>
               ) : (
                <div className="chat-icon" onClick={toggleChat}>
                  <img src="https://fitfusion.s3.us-west-1.amazonaws.com/chat-icon.png" alt=""></img>
                </div>
               )
            }
        </>
        )
      }

    
export default Chat