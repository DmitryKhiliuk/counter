import React from 'react';

type ButtonType = {
    callBack: () => void
    buttonName: string
}


export const Button = (props:ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.buttonName}</button>
        </div>
    );
};

