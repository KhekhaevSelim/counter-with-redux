import {useDispatch} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import {RootStateType} from "../redux/store";
import {AnyAction} from "redux";
type AppDispatchType = ThunkDispatch<RootStateType,unknown,AnyAction >
export const useAppDispatch = () => useDispatch<AppDispatchType>()
