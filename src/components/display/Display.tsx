import React from 'react';
import d from "./Display.module.css"
import {useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {incrementAC, resetAC} from "../../reducers/countReducer";
import {useAppDispatch} from '../../costomHooks/useAppDispatch';

const Display = () => {

    let count = useSelector<RootStateType, number>(state => state.counter.currentCount)
    let dispatch = useAppDispatch()

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