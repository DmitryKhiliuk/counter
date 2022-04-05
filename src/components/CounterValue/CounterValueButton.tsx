import React from 'react';
import {Button} from "../../Button";

type CounterValueButtonType = {
    max: string
    start: string
    setMax: (max: string) => void
    setStart: (start: string) => void
    setLSHandler: () => void
    disabled: boolean
    error: boolean
}


export const CounterValueButton = (props: CounterValueButtonType) => {

    return (
        <div className={'counter__button'}>
            <Button callBack={props.setLSHandler}
                    buttonName={'set'}
                    disabled={props.error || props.disabled}

            />
        </div>
    );
};

