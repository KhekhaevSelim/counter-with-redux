import React from 'react';
import d from "./Display.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {incrementAC, resetAC} from "../../reducers/countReducer";
import Notification from "../notification/Notification";

const Display = () => {

    let count = useSelector<RootStateType, number>(state => state.counter.currentCount)

    let minCount = useSelector<RootStateType, number>(state => state.counter.minValue)
    let dispatch = useDispatch()

    const increment = () => {
        dispatch(incrementAC())
    }
    const reset = () => {
        dispatch(resetAC())
    }
    return (
                <div className={d.container}>
                    <div className={d.display}>
                        {count}
                    </div>
                    <div className={d.buttons}>
                        <button className={d.btn} onClick={increment}>+</button>
                        <button className={d.btn} onClick={reset}>reset</button>
                    </div>
                </div>
    );
};

export default Display;