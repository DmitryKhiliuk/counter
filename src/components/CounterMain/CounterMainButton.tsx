import React from 'react';
import {Button} from "../../Button";

type CounterMainButtonType = {
    numbInc: () => void
    numbReset: () => void
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
            <Button buttonName={'inc'} callBack={buttonIncHandler}/>
            <Button buttonName={'reset'} callBack={buttonResetHandler}/>
        </div>
    );
};

