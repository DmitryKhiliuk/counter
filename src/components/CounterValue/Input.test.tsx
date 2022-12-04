import React from 'react';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Input} from "./Input";


const onChange = jest.fn()


describe('test input', () => {
    it('', () => {
        render(<Input nameInput={'name'} value={''} inputClass={''} callBackInput={onChange}/>)
        const input = screen.getByTestId('input-basic')
        expect(input).toBeInTheDocument()
        userEvent.type(input, '1')
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})