import { useState } from "react";
import "../Chat.css"

const Chat = () => {

    const URL = "http://localhost:8000/api/v1/chat/"
    const [messages, setMessages] = useState([])

    const handleMessageSubmit = async (e) => {
        e.preventDefault()
        const userMessage = e.target.message.value


    const updateMessages = [...messages, { content: userMessage, sender: 'user' }];
        setMessages(updateMessages);

        const getResponseFromAI = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({ message: userMessage }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await getResponseFromAI.json();
          console.log("data from chat reponse", data.data)
      

    const addResponseToChat = [...updateMessages, { content: data.data, sender: 'openai' }];
    setMessages(addResponseToChat);
    console.log("response",addResponseToChat )
  };

        return(
            <div className="chat-container">
            <div className="message-display">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.content}
                </div>
              ))}
            </div>
            <form className="message-input" onSubmit={handleMessageSubmit}>
              <input type="text" name="message" placeholder="Type your message..." />
              <button type="submit">Send</button>
            </form>-
          </div>
        );
      };

    
export default Chat