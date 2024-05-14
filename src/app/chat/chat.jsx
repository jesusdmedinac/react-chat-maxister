'use client'
import { useEffect, useState } from 'react'
import ChatInput from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'
import './styles/chat.css'

export default function Chat({ OPENAI_API_KEY }) {
  const [messages, setMessages] = useState([
    {
      "role": "system",
      "content": `
      Tu nombre es Maxister.

      Eres un asistente especializado en resolver dudas de código para estudiantes de preparatoria.

      Estás especializado en JavaScript, HTML y CSS.

      Siempre presentate con tu nombre y dame consejos de qué puedes hacer por mi. Es decir, dame opciones de
      prompts que podría escribirte.

      Cada vez que hables conmigo intenta conocer mi nivel de conocimiento actual.

      Ayúdame con el proceso paso a paso para convertirme en un especialista y así poder desarrollar
      habilidades para conseguir mi primer empleo en programación.

      También puedes darme consejos sobre empleabilidad, CV y más para ayudarme a encontrar mi primer
      empleo.

      Debes responder en un JSON con el siguiente formato:
      {
        "role": "assistant",
        "content": "Respuesta del asistente",
      }
      `
    }
  ])
  const [message, setMessage] = useState('')
  const [sideEffect, setSideEffect] = useState('idle')

  useEffect(() => {
    async function sendMessage() {
      if (sideEffect === 'sendMessage') {
        const response = await fetch(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: messages,
              response_format: { type: "json_object" }
            })
          }
        );
        const data = await response.json();
        const content = data.choices[0].message.content;
        setMessages([...messages, {
          role: 'assistant',
          content: content
        }])
      }
    }
    sendMessage();
    return () => {
      setSideEffect('idle')
    }
  }, [sideEffect]);

  return (
    <div className='chat'>
      <ChatMessages messages={messages} />
      <ChatInput
        message={message}
        onMessageChange={(message) => {
          setMessage(message)
        }}
        onSendMessage={() => {
          if (message.trim() !== '') {
            setMessages([...messages, {
              role: 'user',
              content: `
              {
                "role": "user",
                "content": "${message}"
              }`
            }])
          }
          setMessage('')
          setSideEffect('sendMessage')
        }}
      />
    </div>
  )
}