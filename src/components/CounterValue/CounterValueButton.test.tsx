import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import * as actions from "../../state/counter-reducer";
import * as reduxHooks from "react-redux";
import {AppRootStateType} from "../../state/store";
import {CounterValueButton} from "./CounterValueButton";

let startState: AppRootStateType

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const dispatch = jest.fn()


describe('test main button', () => {
    beforeEach(() => {
        startState = {
            counter: {
                active: true,
                error: false,
                isDisabled: false,
                maxValue: "5",
                minValue: "0",
                presentValue: 0
            }
        }}
    )
    afterEach(() => {
        jest.clearAllMocks()
    })
    it('should create counter value button', () => {
        mockedDispatch.mockReturnValue(dispatch)
        const utils = render(<CounterValueButton counter={startState.counter}/>)
        expect(utils).toMatchSnapshot()
    })
    it('render button', () => {
        render(<CounterValueButton counter={startState.counter}/>)
        const buttonSet = screen.getByText('set')
        expect(buttonSet).toBeInTheDocument()
    })

    it('should dispatch increment action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        const mockedPresentValueAC = jest.spyOn(actions, 'PresentValueAC')
        render(<CounterValueButton counter={startState.counter}/>)
        fireEvent.click(screen.getByText('set'))
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(mockedPresentValueAC).toHaveBeenCalled()
    })
})