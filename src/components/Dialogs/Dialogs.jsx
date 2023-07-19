import d from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/MessageItem';


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Sashka' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Artem' },
        { id: 4, name: 'Sanechek' },
        { id: 5, name: 'Rostil' },
        { id: 6, name: 'Lisa' },
        { id: 7, name: 'Vera' }
    ];

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Ti chmo' },
        { id: 3, message: 'Day deneg' },
        { id: 4, message: 'privet' },
        { id: 5, message: 'sho ti' },
        { id: 6, message: 'aaaaa' },
        { id: 7, message: 'hahahah' }
    ];

    let dialogsElements = dialogs.map( (d) => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages.map( (m) => <MessageItem message={m.message} /> );

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;