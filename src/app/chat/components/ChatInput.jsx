import { Button } from '@rmwc/button';
import { TextField } from '@rmwc/textfield';
import '@material/button/dist/mdc.button.css';
import '@material/textfield/dist/mdc.textfield.css';

export default function ChatInput({ message, onMessageChange, onSendMessage }) {
    return (
      <div className="chat-input">
        <TextField outlined placeholder="Platica con Maxister" value={message} onChange={(e) => onMessageChange(e.target.value)} />
        <Button type="submit" onClick={onSendMessage} outlined>Enviar</Button>
      </div>
    );
}