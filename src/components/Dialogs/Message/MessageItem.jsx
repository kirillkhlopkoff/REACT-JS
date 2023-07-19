import d from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const MessageItem = (props) => {
    return (
        <div className={d.message}>
            {props.message}
        </div>
    )
}

export default MessageItem;