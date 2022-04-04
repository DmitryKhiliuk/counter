import React from 'react';

type CounterMainTableType = {
    numb: number
    start: string
    max: string
    /*inputClassStart: string
    inputClassMax: string*/
    focus: boolean
}


export const CounterMainTable = (props:CounterMainTableType) => {
    return (
        <div>
            {<div>{props.numb}</div>}
            {props.focus && <div>enter values and press 'set'</div>}
            {<div>Incorrect value!</div>}
        </div>
    );
};

