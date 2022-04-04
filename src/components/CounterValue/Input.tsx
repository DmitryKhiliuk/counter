import React, {ChangeEvent} from 'react';

type InputType = {
    nameInput: string
    callBackInput: (value:string) => void
    value: string
    inputClass: string
    callBackFocus: () => void
}


export const Input = (props:InputType) => {

const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.callBackInput(e.currentTarget.value)
}

const onFocusHandler = () => {
  props.callBackFocus()
}

    return (
        <div>
            <span>{props.nameInput}</span>
            <input type="number"
                   onChange={onChangeHandler}
                   value={props.value}
                    onFocus={onFocusHandler}
                   className={props.inputClass}/>
        </div>
    );
};

