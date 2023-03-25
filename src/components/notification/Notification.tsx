import React from 'react';
import s from "./Notification.module.css";
import {useDispatch} from "react-redux";
import {closeNotifyAC} from "../../reducers/countReducer";

const Notification = () => {
    let dispatch = useDispatch()
    const closeNotify = () => {
        dispatch(closeNotifyAC())
    }
    return (
        <div className={s.container}>
            <div className={s.notificationDisplay}>
                <p className={s.notification}>min value should be less max value, please,
                    push 'done' and
                    enter the appropriate integer </p>
            </div>
            <div className={s.notificationButton}>
                <button className={s.btn}
                        onClick={()=>closeNotify()}
                >done</button>
            </div>
        </div>
    );
};

export default Notification;