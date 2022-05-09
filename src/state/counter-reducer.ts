
const initialState = {
    maxValue: '5',
    minValue: '0',
    numb: 0,
    isDisabled: true,
    error: false,
    active: true,
}
export type ActionsType = AddMaxValueACType | AddMinValueACType
export type InitialStateType = typeof initialState
export const counterReducer = (state: InitialStateType = initialState,action:ActionsType) => {
    switch (action.type) {
        case "MAX_VALUE": {
            return {...state, maxValue: action.maxValue}
        }
        case "MIN_VALUE": {
            return {...state, minValue: action.minValue}
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