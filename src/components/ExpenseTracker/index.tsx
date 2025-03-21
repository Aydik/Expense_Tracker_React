import React from 'react'
import {ExpenseList} from "../ExpenseList";
import {ExpensesStats} from "../ExpensesStats";

export const ExpenseTracker: React.FC = () => {
    return (
        <>
            <ExpensesStats/>
            <ExpenseList/>
        </>
    )
}