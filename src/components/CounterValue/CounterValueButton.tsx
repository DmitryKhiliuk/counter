import React, {useEffect} from 'react';
import {Button} from "../../Button";

type CounterValueButtonType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    setLSHandler: () => void
    disabled: boolean
}


export const CounterValueButton = (props: CounterValueButtonType) => {
    
const buttonSetHandler = () => {
    props.setLSHandler()
}



    return (
        <div>
            <Button callBack={buttonSetHandler} buttonName={'set'} disabled={props.disabled}/>
        </div>
    );
};

