import React from 'react';
import {Button} from "../../Button";
import {useDispatch} from "react-redux";
import {IncrementAC, InitialStateType, resetAC} from "../../state/counter-reducer";

type CounterMainButtonType = {

    counter: InitialStateType
}
export const CounterMainButton = (props:CounterMainButtonType) => {

const dispatch = useDispatch()

const incButtonHandler = () => {
    (props.counter.presentValue < +props.counter.maxValue) && dispatch(IncrementAC(props.counter.presentValue))
}
const resetButtonHandler = () => {
    dispatch(resetAC(props.counter.minValue))
}

    return (
        <div className={'counter__button'}>
            <Button buttonName={'inc'}
                    callBack={incButtonHandler}
                    disabled={props.counter.presentValue === +props.counter.maxValue || !props.counter.isDisabled}/>
            <Button buttonName={'reset'}
                    callBack={resetButtonHandler}
                    disabled={!props.counter.isDisabled}/>
        </div>
    );
};

