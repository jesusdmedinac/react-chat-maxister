export default function ChatInput({ message, onMessageChange, onSendMessage }) {
    return (
      <div className="chat-input">
        <input placeholder="Platica con Maxister" value={message} onChange={(e) => onMessageChange(e.target.value)} />
        <button type="submit" onClick={onSendMessage}>Enviar</button>
      </div>
    );
}