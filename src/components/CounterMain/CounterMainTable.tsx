import React from 'react';

type CounterMainTableType = {
    numb: number
    start: string
    max: string
    error: boolean
    /*focus: boolean*/
    active: boolean
}


export const CounterMainTable = (props:CounterMainTableType) => {
    return (
        <div className={'counter__table'}>
            {!props.active && !props.error && <div className={props.numb === +props.max?'error-number':'number'}>{props.numb}</div>}
            {props.active && !props.error && <div className={'message'}>enter values and press 'set'</div>}
            {props.error && <div className={'error-message'}>Incorrect value!</div>}
        </div>
    );
};

