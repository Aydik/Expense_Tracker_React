import React from 'react'
import {IExpense} from "../Expense/index.interfaces.ts";
import {Expense} from "../Expense";
import {useSelector} from "react-redux";
import {RootState} from "../../store.tsx";

export const ExpenseList: React.FC = () => {
    const expenses = useSelector((state: RootState) => state.expenses.value);

    return (
        <>
            <ul>
                {expenses.map((expense: IExpense) => (
                    <li key={expense.id}><Expense expense={expense}/></li>
                ))}
            </ul>
        </>
    )
}