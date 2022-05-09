import React from 'react';
import {Button} from "../../Button";
import {InitialStateType, PresentValueAC} from "../../state/counter-reducer";
import {useDispatch} from "react-redux";

type CounterValueButtonType = {

    counter: InitialStateType
}


export const CounterValueButton = (props: CounterValueButtonType) => {

    const dispatch = useDispatch()

    const setButtonHandler = () => {
      dispatch(PresentValueAC(props.counter.minValue, props.counter.isDisabled, props.counter.active))
    }

    return (
        <div className={'counter__button'}>
            <Button callBack={setButtonHandler}
                    buttonName={'set'}
                    disabled={props.counter.error || props.counter.isDisabled}

            />
        </div>
    );
};

