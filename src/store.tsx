import {configureStore, createSlice} from '@reduxjs/toolkit';
import {IExpense} from "./components/Expense/index.interfaces.ts";

const initialState: { value: IExpense[] } = {
    value: [
        {
            id: Date.now(),
            name: "Expense 1",
            amount: 1,
        },
        {
            id: Date.now() + 1,
            name:
                "Expense 2",
            amount:
                2,
        }
    ]
};

// Создаем slice (срез) для состояния counter
const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        deleteExpense: (state,
                        action: {
                            type: string,
                            payload: number
                        }) => {
            state.value = state.value.filter(expense =>
                expense.id !== action.payload);
        },
        addExpense: (state,
                     action: {
                         type: string,
                         payload: IExpense
                     }) => {
            state.value.push(action.payload);
        },
        editExpense: (state,
                      action: {
                          type: string,
                          payload: IExpense
                      }) => {
            state.value = state.value.map(expense => {
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

// Создаем store с `configureStore`
export const store = configureStore({
    reducer: {
        expenses: expensesSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

