import React from 'react'
import {IExpenseProps} from "./index.interfaces.ts";
import {AppDispatch, deleteExpense} from "../../store.tsx";
import {useDispatch} from "react-redux";

export const Expense: React.FC<IExpenseProps> = ({expense}: IExpenseProps) => {
    const dispatch: AppDispatch = useDispatch();

    return (
        <div>
            <p>{expense.name}</p>
            <p>{expense.amount}</p>
            <button onClick={() =>
                dispatch(deleteExpense(expense.id))}>delete
            </button>
        </div>
    )
}