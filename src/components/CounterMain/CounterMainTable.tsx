import React from 'react';
import {InitialStateType} from "../../state/counter-reducer";

type CounterMainTableType = {
    counter: InitialStateType
}



export const CounterMainTable = (props:CounterMainTableType) => {
    return (
        <div className={'counter__table'}>
            {!props.counter.active && !props.counter.error && <div className={props.counter.presentValue === +props.counter.maxValue?'error-number':'number'}>{props.counter.presentValue}</div>}
            {props.counter.active && !props.counter.error && <div className={'message'}>enter values and press 'set'</div>}
            {props.counter.error && <div className={'error-message'}>Incorrect value!</div>}
        </div>
    );
};

/*<div className={'counter__table'}>
    {!props.active && !props.error && <div className={props.numb === +props.max?'error-number':'number'}>{props.numb}</div>}
    {props.active && !props.error && <div className={'message'}>enter values and press 'set'</div>}
    {props.error && <div className={'error-message'}>Incorrect value!</div>}
</div>*/

