import {AppRootStateType} from "../../state/store";
import {fireEvent, render, screen} from "@testing-library/react";
import {CounterValueTable} from "./CounterValueTable";
import * as reduxHooks from "react-redux";
import * as actions from "../../state/counter-reducer";
import * as i from "../CounterValue/Input";
import {Input} from "../CounterValue/Input";
import userEvent from "@testing-library/user-event";
import {CounterMainTable} from "../CounterMain/CounterMainTable";

let startState: AppRootStateType

jest.mock('react-redux')
const dispatch = jest.fn()

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')


const mockedAddMaxValueAC = jest.spyOn(actions, 'addMaxValueAC')
const mockedAddMinValueAC = jest.spyOn(actions, 'addMinValueAC')
const mockedErrorAC = jest.spyOn(actions, 'errorAC')



describe('test value table', () => {
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
    it('should create counter main table', () => {
        mockedDispatch.mockReturnValue(dispatch)
        const utils = render(<CounterValueTable counter={startState.counter}/>)
        expect(utils).toMatchSnapshot()
    })
    it('render input', () => {
        mockedDispatch.mockReturnValue(dispatch)
        render(<CounterValueTable counter={startState.counter}/>)
        const input = screen.getAllByTestId('input-basic')
        expect(input[0]).toBeInTheDocument()
        expect(input[1]).toBeInTheDocument()
    })
    it('should dispatch add max value action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        render(<CounterValueTable counter={startState.counter}/>)
        const input = screen.getAllByTestId('input-basic')
        userEvent.type(input[0], '6')
        expect(mockedAddMaxValueAC).toHaveBeenCalled()
    })
    it('should dispatch add min value action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        render(<CounterValueTable counter={startState.counter}/>)
        const input = screen.getAllByTestId('input-basic')
        userEvent.type(input[1], '1')
        expect(mockedAddMinValueAC).toHaveBeenCalled()
    })
    it('should dispatch error action', () => {
        mockedDispatch.mockReturnValue(dispatch)
        const view = {...startState, counter: {...startState.counter, error: true, minValue: '-1'}}
        render(<CounterValueTable counter={view.counter}/>)
        expect(mockedErrorAC).toHaveBeenCalled()
    })
    it('render input red', () => {
        mockedDispatch.mockReturnValue(dispatch)
        const view = {...startState, counter: {...startState.counter, error: true, minValue: '6'}}
        render(<CounterValueTable counter={view.counter}/>)
        const input = screen.getAllByTestId('input-basic')
        const maxValue = input[0]
        expect(maxValue.className).toEqual('error')
        expect(maxValue).toBeInTheDocument()

    })


})