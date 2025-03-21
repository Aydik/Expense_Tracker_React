import {configureStore} from '@reduxjs/toolkit';
import {expensesSlice} from "./expenses.ts";

export const store = configureStore({
    reducer: {
        expenses: expensesSlice.reducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

