import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import * as actions from "../../state/counter-reducer";
import * as reduxHooks from "react-redux";
import {AppRootStateType} from "../../state/store";
import {CounterMainButton} from "./CounterMainButton";

let startState: AppRootStateType

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const dispatch = jest.fn()


describe('test main button', () => {
    beforeEach(() => {
        startState = {
            counter: {
                active: false,
                error: false,
                isDisabled: true,
                maxValue: "5",
                minValue: "0",
                presentValue: 0
            }
        }}
    )
    afterEach(() => {
        jest.clearAllMocks()
    })
    it('should create counter main button', () => {
        mockedDispatch.mockReturnValue(dispatch)
        const utils = render(<CounterMainButton counter={startState.counter}/>)
        expect(utils).toMatchSnapshot()
    })
    it('render button', () => {
        render(<CounterMainButton counter={startState.counter}/>)
        const buttonInc = screen.getByText('inc')
        const buttonReset = screen.getByText('reset')
        const buttonAll = screen.getAllByRole('button')
        expect(buttonInc).toBeInTheDocument()
        expect(buttonReset).toBeInTheDocument()
        expect(buttonAll).toEqual([buttonInc, buttonReset])
    })

    it('should dispatch increment action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        const mockedIncrementAC = jest.spyOn(actions, 'IncrementAC')
        render(<CounterMainButton counter={startState.counter}/>)
        fireEvent.click(screen.getByText('inc'))
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(mockedIncrementAC).toHaveBeenCalled()
    })
    it('should dispatch reset action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        const mockedResetAC = jest.spyOn(actions, 'resetAC')
        render(<CounterMainButton counter={startState.counter}/>)
        fireEvent.click(screen.getByText('reset'))
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(mockedResetAC).toHaveBeenCalled()
    })
})
