import {AppRootStateType} from "../../state/store";
import {render, screen} from "@testing-library/react";
import {CounterValueTable} from "./CounterValueTable";
import * as reduxHooks from "react-redux";

let startState: AppRootStateType

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const dispatch = jest.fn()

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
        mockedDispatch.mockReturnValue(dispatch)
        const utils = render(<CounterValueTable counter={startState.counter}/>)
        expect(utils).toMatchSnapshot()
    })

})