import React from 'react'
import Markdown from 'react-markdown'
import { Icon } from '@rmwc/icon';
import '@rmwc/icon/icon.css';
import { Avatar } from '@rmwc/avatar';
import '@rmwc/avatar/avatar.css';
import Image from 'next/image'
import logo from '../../../../public/logo - maxister.png';

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
              <div className='message-avatar'>
                {
                  author == "Alumno" ?
                    <Icon
                      icon={{ icon: 'person', size: 'xlarge' }}
                      style={{ color: '#FFF' }}
                    />
                    :
                    <Image
                      src={logo}
                      alt="Picture of the author"
                      width={32}
                      height={32}
                      className='message-avatar-icon'
                    />
                }
              </div>
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