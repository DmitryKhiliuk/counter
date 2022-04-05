import React from 'react';

type ButtonType = {
    callBack: () => void
    buttonName: string
    disabled: boolean
}


export const Button = (props:ButtonType) => {
    let click = ''
    const onClickHandler = () => {
        click += 'click'
        props.callBack()

    }

    return (
        <div>
            <button onClick={onClickHandler}
                    disabled={props.disabled}
                    className={`${'button'} ${click}`}>{props.buttonName}</button>
        </div>
    );
};

