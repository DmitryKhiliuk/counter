import {AppRootStateType} from "../../state/store";
import {render, screen} from "@testing-library/react";
import {CounterMainTable} from "./CounterMainTable";

let startState: AppRootStateType

describe('test main table', () => {
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
    it('should create counter main table', () => {
        const utils = render(<CounterMainTable counter={startState.counter}/>)
        expect(utils).toMatchSnapshot()
    })
    it('render present value', () => {
        render(<CounterMainTable counter={startState.counter}/>)
        const presentValue = screen.getByText(/0/i)
        expect(presentValue.className).toEqual('number')
        expect(presentValue).toBeInTheDocument()

    })
    it('render present value red', () => {
        const view = {...startState, counter: {...startState.counter, presentValue: 5}}
        render(<CounterMainTable counter={view.counter}/>)
        const presentValue = screen.getByText(/5/i)
        expect(presentValue.className).toEqual('error-number')
        expect(presentValue).toBeInTheDocument()

    })
    it('render error', () => {
        const view = {...startState, counter: {...startState.counter, error: true}}
        render(<CounterMainTable counter={view.counter}/>)
        const presentValue = screen.getByText(/Incorrect value!/i)
        expect(presentValue).toBeInTheDocument()
    })
    it('render enter values and press set', () => {
        const view = {...startState, counter: {...startState.counter, active: true, isDisabled: false}}
        render(<CounterMainTable counter={view.counter}/>)
        const presentValue = screen.getByText(/enter values and press 'set'/i)
        expect(presentValue).toBeInTheDocument()
    })
})