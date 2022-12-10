import * as React from 'react';
import {
    addMaxValueAC,
    addMinValueAC,
    counterReducer,
    errorAC,
    IncrementAC,
    InitialStateType,
    PresentValueAC,
    resetAC
} from "./counter-reducer";


let startState: InitialStateType
describe('reducer test', () => {
    beforeEach(() => {
        startState = {
            active: false,
            error: false,
            isDisabled: true,
            maxValue: "5",
            minValue: "0",
            presentValue: 0
        }}
    )
    it('max value test', () => {
        const endState = counterReducer(startState, addMaxValueAC('6'))
        expect(endState.maxValue).toBe('6')
    })
    it('min value test', () => {
        const endState = counterReducer(startState, addMinValueAC('1'))
        expect(endState.minValue).toBe('1')
    })
    it('present value test', () => {
        const endState = counterReducer(startState, PresentValueAC('1', false, true))
        expect(endState.presentValue).toBe(1)
        expect(endState.isDisabled).toBe(false)
        expect(endState.active).toBe(true)
    })
    it('increment test', () => {
        const endState = counterReducer(startState, IncrementAC(0))
        expect(endState.presentValue).toBe(1)
    })
    it('reset test', () => {
        const endState = counterReducer(startState, resetAC('1'))
        expect(endState.presentValue).toBe(1)
    })
    it('error test', () => {
        const endState = counterReducer(startState, errorAC(true))
        expect(endState.error).toBe(true)
    })

})