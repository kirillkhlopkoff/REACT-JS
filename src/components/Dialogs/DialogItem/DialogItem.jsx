import d from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <div className={`${d.dialog} ${d.active}`} >
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;