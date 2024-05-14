import React from 'react'
import Markdown from 'react-markdown'

export default function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      <ul>
        {messages.slice(1).map((message, index) => {
          let jsonMessage = JSON.parse(message.content);
          let author = "";
          if (message.role == "user") {
            author = "Alumno"
          } else if (message.role == "assistant") {
            author = "Maxister"
          }
          const markdown = jsonMessage.content;
          return (
            <li key={index}>
              <div className="message-content">
                <p><strong>{author}</strong></p>
                <Markdown>{markdown}</Markdown>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}