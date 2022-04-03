import React from 'react';

type CounterMainTableType = {
    numb: number
    start: string
}


export const CounterMainTable = (props:CounterMainTableType) => {
    return (
        <div>
            <p>{props.numb}</p>
        </div>
    );
};

