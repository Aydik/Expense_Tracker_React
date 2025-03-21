import {IExpense} from "../components/Expense/index.interfaces.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IExpense[] = [
    {
        id: Date.now(),
        name: "Expense 1",
        amount: 11111,
    },
    {
        id: Date.now() + 1,
        name: "Expense 2",
        amount: 22222,
    },
    {
        id: Date.now() + 2,
        name: "Expense 3",
        amount: 33333,
    }
];


// Создаем slice (срез) для состояния counter
export const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        deleteExpense: (state,
                        action: PayloadAction<number>) => {
            return state.filter(expense => {
                return expense.id !== action.payload
            });
        },
        addExpense: (state,
                     action: PayloadAction<IExpense>) => {
            state.push(action.payload);
        },
        editExpense: (state,
                      action: PayloadAction<IExpense>) => {
            return state.map(expense => {
                    if (expense.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return expense;
                    }
                }
            );
        },
    }
});

// Экспортируем экшены
export const {deleteExpense, addExpense, editExpense} = expensesSlice.actions;