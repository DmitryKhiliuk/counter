import React from 'react';
import {CounterMainTable} from "./CounterMainTable";
import {CounterMainButton} from "./CounterMainButton";
import s from "./CounterMain.module.css"

export const CounterMain = () => {
    return (
        <div>
            <CounterMainTable />
            <CounterMainButton />
        </div>
    );
};

