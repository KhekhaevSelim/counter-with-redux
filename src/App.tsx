import React from 'react';
import s from "./App.module.css"
import Display from "./components/display/Display";
import setting from "./assets/settings-logo.jpg"
import {useDispatch, useSelector} from "react-redux";
import {showSettingsAC} from "./reducers/countReducer";
import {RootStateType} from "./redux/store";
import Settings from './components/settings/Settings';
function App() {
    let settings = useSelector<RootStateType, boolean>(state => state.counter.settings)
    let dispatch = useDispatch()
    const showSettings = (value : boolean) => {
        dispatch(showSettingsAC(value))
    }
    return (
        <div className={s.main}>
            <div className={s.settingIconContainer}>
                <img src={setting}
                     alt="setting logo"
                     className={s.settingIcon}
                     onClick={()=>showSettings(true)}
                />
            </div>
            {settings ?
             <Settings/>
            :
                <Display/>
            }

        </div>
    );
}

export default App;
