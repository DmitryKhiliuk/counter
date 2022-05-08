
const initialState = {
    max: '5',
    start: '0',
    numb: 0,
    isDisabled: true,
    error: false,
    active: true,
}
export type ActionsType = counterACType
type InitialStateType = typeof initialState
export const counterReducer = (state: InitialStateType = initialState,action:ActionsType) => {
    switch (action.type) {
        case "COUNTER": {
            return {...state, max: action.max}
        }
        default: {
            return state
        }
    }
}

export type counterACType = ReturnType<typeof counterAC>
export const counterAC = (max:number) => {
    return {
        type: 'COUNTER',
        max
    } as const
}