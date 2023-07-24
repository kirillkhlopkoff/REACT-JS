import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';
import React from 'react';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = props.state.messages.map( (m) => <MessageItem message={m.message} /> );

    let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
            <div>
        <textarea ref={newMessageElement}></textarea>
          </div>
          <div>
            <button onClick={ sendMessage}>Send a message</button>
          </div>
        </div>
    )
}

export default Dialogs;