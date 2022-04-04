import React from 'react';

type ButtonType = {
    callBack: () => void
    buttonName: string
    disabled: boolean
}


export const Button = (props:ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}
                    disabled={props.disabled}>{props.buttonName}</button>
        </div>
    );
};

