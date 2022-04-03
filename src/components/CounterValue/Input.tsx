import React, {ChangeEvent} from 'react';

type InputType = {
    nameInput: string
    callBackInput: (value:string) => void
    value: string
    inputClass: string
}


export const Input = (props:InputType) => {

const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.callBackInput(e.currentTarget.value)
}

    return (
        <div>
            <span>{props.nameInput}</span>
            <input type="number"
                   onChange={onChangeHandler}
                   value={props.value}

                   className={props.inputClass}/>
        </div>
    );
};

