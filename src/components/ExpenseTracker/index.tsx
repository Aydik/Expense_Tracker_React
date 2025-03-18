import React from 'react'
import {ExpenseList} from "../ExpenseList";
import {ExpenseForm} from "../ExpenseForm";

export const ExpenseTracker: React.FC = () => {
    return (
        <>
            <ExpenseForm/>
            <ExpenseList/>
        </>
    )
}