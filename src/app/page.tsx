import Chat from "./chat/chat"

export default function Home() {
  return (
    <>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    <Chat OPENAI_API_KEY={process.env.OPENAI_API_KEY}/>
    </>
  );
}
