import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import * as reduxHooks from "react-redux";
import {AppRootStateType} from "./state/store";
import App from "./App";

jest.mock('react-redux')

const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

let startState: AppRootStateType = {
    counter: {
        active: false,
        error: false,
        isDisabled: true,
        maxValue: "5",
        minValue: "0",
        presentValue: 0
    }
}

describe('test app', () => {
    it('should create app', () => {
        mockedSelector.mockReturnValue(startState)
        mockedDispatch.mockReturnValue(jest.fn())
        const utils = render(<App/>)
        expect(utils).toMatchSnapshot()
    })
})