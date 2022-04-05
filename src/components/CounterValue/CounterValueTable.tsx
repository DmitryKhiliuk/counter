import React from 'react';
import {Input} from "./Input";

type CounterValueTableType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    error: boolean
    /*focusInput: () => void*/
}


export const CounterValueTable = (props:CounterValueTableType) => {




    return (
        <div className={'counter__table'}>
            <Input nameInput={'max value'}
                   callBackInput={props.setMax}
                   value={props.max}
                   inputClass={props.error && +props.start >= +props.max?'error':'input'}
                   /*callBackFocus={props.focusInput}*//>
            <Input nameInput={'start value'}
                   callBackInput={props.setStart}
                   value={props.start}
                   inputClass={props.error?'error':'input'}
                   /*callBackFocus={props.focusInput}*//>
        </div>
    );
};

