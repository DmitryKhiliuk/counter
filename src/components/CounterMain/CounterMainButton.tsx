import React from 'react';
import {Button} from "../../Button";

type CounterMainButtonType = {
    numbInc: () => void
    numbReset: () => void
    disabled: boolean
}



export const CounterMainButton = (props:CounterMainButtonType) => {

const buttonIncHandler = () => {
  props.numbInc()
}
const buttonResetHandler = () => {
  props.numbReset()
}

    return (
        <div>
            <Button buttonName={'inc'}
                    callBack={buttonIncHandler}
                    disabled={props.disabled}/>
            <Button buttonName={'reset'}
                    callBack={buttonResetHandler}
                    disabled={props.disabled}/>
        </div>
    );
};

