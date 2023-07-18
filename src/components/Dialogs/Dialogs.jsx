import d from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path ="/dialogs/" + props.id;
    return (
        <div>
            <div className={`${d.dialog} ${d.active}`} >
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
} 

const MessageItem = (props) => {
    return (
        <div className={d.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name="Sashka" id="1" />
                <DialogItem name="Misha" id="2" />
                <DialogItem name="Artem" id="3" />
                <DialogItem name="Sanechek" id="4" />
                <DialogItem name="Rostik" id="5" />
                <DialogItem name="Lisa" id="6" />
                <DialogItem name="Vera" id="7" />
            </div>
            <div className={d.messages}>
                <MessageItem message="Hi!"/>
                <MessageItem message="Ti chmo"/>
                <MessageItem message="Day deneg"/>
            </div>
        </div>
    )
}

export default Dialogs;