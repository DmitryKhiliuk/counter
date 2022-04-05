import React from 'react';
import {Button} from "../../Button";

type CounterMainButtonType = {
    numbInc: () => void
    numbReset: () => void
    disabled: boolean
    error: boolean
    numb: number
    max: string
}



export const CounterMainButton = (props:CounterMainButtonType) => {

const buttonIncHandler = () => {
  props.numbInc()
}
const buttonResetHandler = () => {
  props.numbReset()
}

    return (
        <div className={'counter__button'}>
            <Button buttonName={'inc'}
                    callBack={buttonIncHandler}
                    disabled={props.numb === +props.max || props.disabled}/>
            <Button buttonName={'reset'}
                    callBack={buttonResetHandler}
                    disabled={props.disabled}/>
        </div>
    );
};

