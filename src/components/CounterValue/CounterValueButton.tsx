import React, {useEffect, useState} from 'react';
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

    return (
        <div>
            <Button callBack={props.setLSHandler}
                    buttonName={'set'}
                    disabled={props.disabled}
            />
        </div>
    );
};

