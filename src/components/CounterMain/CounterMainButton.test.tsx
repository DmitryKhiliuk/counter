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
                maxValue:"4",
                minValue:"1",
                presentValue:4
        }
    })
    it('render button', () => {
        render(
            <Provider store={store}>
                <CounterMainButton counter={counter}/>)
                </Provider>
        )
        const buttonInc = screen.getByText('inc')
        const buttonReset = screen.getByText('reset')
        expect(buttonInc).toBeInTheDocument()
        expect(buttonReset).toBeInTheDocument()

    })
})