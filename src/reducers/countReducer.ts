
export type StateType = {
    currentCount : number,
    settings : boolean,
    minValue : number,
    maxValue : number,
    isNotify : boolean
}
const initialState = {
    currentCount : 0,
    settings : false,
    minValue : 0,
    maxValue : 10,
    isNotify : false
}
export const countReducer = (state : StateType = initialState, action : CounterActionsType) : StateType => {
    switch (action.type){
        case "INCREMENT" :
            if(state.currentCount + 1 > state.maxValue){
                return {...state, isNotify : true}
            }else {
                return {...state, currentCount : state.currentCount+1}
            }
        case "RESET":
            return {...state, currentCount : state.minValue}
        case "SHOW-SETTINGS" :
            return {...state, settings : action.value}
        case "CLOSE-SETTINGS" :
            return {...state, settings : action.value}
        case "SET-MAX-VALUE":
            return {...state, maxValue : +action.value}
        case "SET-MIN-VALUE" :
            if(+action.value >= state.maxValue){
              return {...state, isNotify : true}
            } else {
                return {...state, minValue : +action.value,currentCount : +action.value}
            }
        case "CLOSE-NOTIFY" :
            return {...state, isNotify : false}
        default :
            return state
    }
}

export type CounterActionsType = ReturnType<typeof incrementAC> | ReturnType<typeof resetAC>
| ReturnType<typeof showSettingsAC> | ReturnType<typeof closeSettingsAC> | ReturnType<typeof setMaxValueAC>
| ReturnType<typeof setMinValueAC> |  ReturnType<typeof closeNotifyAC>
export const incrementAC = ( ) => {
    return {
        type : "INCREMENT"
    }as const
}
export const resetAC = ( ) => {
    return {
        type : "RESET"
    }as const
}
export const showSettingsAC = ( value : boolean ) => {
    return {
        type : "SHOW-SETTINGS",
        value
    }as const
}
export const closeSettingsAC = ( value : boolean ) => {
    return {
        type : "CLOSE-SETTINGS",
        value
    }as const
}

export const setMaxValueAC = ( value : string ) => {
    return {
        type : "SET-MAX-VALUE",
        value
    }as const
}
export const setMinValueAC = ( value : string ) => {
    return {
        type : "SET-MIN-VALUE",
        value
    }as const
}
export const closeNotifyAC = ( ) => {
    return {
        type : "CLOSE-NOTIFY"
    }as const
}