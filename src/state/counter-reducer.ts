import {store} from "./store";

const initialState = {
    maxValue: '5',
    minValue: '0',
    presentValue: 0,
    isDisabled: true,
    error: false,
    active: true,
}
export type ActionsType = AddMaxValueACType | AddMinValueACType | PresentValueACType | IncrementACType | ResetACType | ErrorACType
export type InitialStateType = typeof initialState
export const counterReducer = (state: InitialStateType = initialState,action:ActionsType) => {
    switch (action.type) {
        case "MAX_VALUE": {
            return {...state, maxValue: action.maxValue}
        }
        case "MIN_VALUE": {
            return {...state, minValue: action.minValue}
        }
        case "PRESENT_VALUE": {
            return {...state, presentValue: action.minValue, isDisabled: !action.isDisabled, active: !action.active}
        }
        case "INCREMENT": {
            return {...state, presentValue: action.presentValue + 1}
        }
        case "RESET": {
            return {...state, presentValue: action.minValue}
        }
        case "ERROR": {
            return {...state, error: action.error}
        }
        default: {
            return state
        }
    }
}

export type AddMaxValueACType = ReturnType<typeof addMaxValueAC>
export const addMaxValueAC = (maxValue:string) => {
    return {
        type: 'MAX_VALUE',
        maxValue
    } as const
}
export type AddMinValueACType = ReturnType<typeof addMinValueAC>
export const addMinValueAC = (minValue:string) => {
    return {
        type: 'MIN_VALUE',
        minValue
    } as const
}
export type PresentValueACType = ReturnType<typeof PresentValueAC>
export const PresentValueAC = (minValue:string, isDisabled: boolean, active: boolean) => {
    return {
        type: 'PRESENT_VALUE',
        minValue: +minValue,
        isDisabled,
        active,
    } as const
}

export type IncrementACType = ReturnType<typeof IncrementAC>
export const IncrementAC = (presentValue:number) => {
    return {
        type: 'INCREMENT',
        presentValue,
    } as const
}

export type ResetACType = ReturnType<typeof resetAC>
export const resetAC = (minValue:string) => {
    return {
        type: 'RESET',
        minValue: +minValue,
    } as const
}
export type ErrorACType = ReturnType<typeof errorAC>
export const errorAC = (error: boolean) => {
    return {
        type: 'ERROR',
        error,
    } as const
}