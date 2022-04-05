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
        <div>
            {!props.active && !props.error && <div>{props.numb}</div>}
            {props.active && !props.error && <div>enter values and press 'set'</div>}
            {props.error && <div className={'error-message'}>Incorrect value!</div>}
        </div>
    );
};

