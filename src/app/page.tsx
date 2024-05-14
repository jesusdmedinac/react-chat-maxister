import styles from "./page.module.css";
import Chat from "./chat/chat"

export default function Home() {
  return (
    <Chat OPENAI_API_KEY={process.env.OPENAI_API_KEY}/>
  );
}
