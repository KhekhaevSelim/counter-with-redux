import React, {ChangeEvent} from 'react';
import s from "./Settings.module.css"
import {useSelector} from "react-redux";
import {closeSettingsAC, setMaxValueAC, setMinValueAC} from "../../reducers/countReducer";
import {RootStateType} from "../../redux/store";
import Notification from "../notification/Notification";
import {useAppDispatch} from "../../costomHooks/useAppDispatch";

const Settings = () => {
    let maxValueFromState = useSelector<RootStateType, number>(state => state.counter.maxValue)
    let minValueFromState = useSelector<RootStateType, number>(state => state.counter.minValue)
    let notification = useSelector<RootStateType, boolean>(state => state.counter.isNotify)
    let dispatch = useAppDispatch()



    const closeSettings = (value : boolean) => {
        dispatch(closeSettingsAC(value))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(+e.currentTarget.value))
    }
    return (
        <>{
            notification ?
                <Notification/>
                :
                <div className={s.container}>
                    <div className={s.settingsDisplay}>
                        <div className={s.upSet}>
                            <span>max-value: </span> <input type="number" value={maxValueFromState} onChange={onChangeMaxValue}/>
                        </div>
                        <div className={s.downSet}>
                            <span>min-value: </span> <input type="number" value={minValueFromState} onChange={onChangeMinValue}/>
                        </div>
                    </div>
                    <div className={s.settingsButton}>
                        {/*<button className={s.btn}>set</button>*/}
                        <button className={s.btn}
                                onClick={()=>closeSettings(false)}
                        >back</button>
                    </div>
                </div>
        }</>

    );
};

export default Settings;