import React from 'react';
import {CounterMainButton} from "./CounterMainButton";
import {render, screen} from "@testing-library/react";
import {InitialStateType} from "../../state/counter-reducer";
import {Provider} from "react-redux";
import {store} from "../../state/store";
describe('test main button', () => {
    let counter:InitialStateType
    beforeEach(() => {
        counter = {
                active: false,
                error:false,
                isDisabled:true,
                maxValue:"5",
                minValue:"0",
                presentValue:0
        }
    })
    test('render button', () => {
        render(
            <Provider store={store}>
                <CounterMainButton counter={counter}/>)
            </Provider>
        )
        const buttonInc = screen.getByText('inc')
        const buttonReset = screen.getByText('reset')
        const buttonAll = screen.getAllByRole('button')
        expect(buttonInc).toBeInTheDocument()
        expect(buttonReset).toBeInTheDocument()
        expect(buttonAll).toEqual([buttonInc, buttonReset])

    })
})