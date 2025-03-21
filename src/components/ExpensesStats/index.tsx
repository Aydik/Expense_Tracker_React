import React, {useState} from "react";
import {Box, Paper, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {IExpense} from "../Expense/index.interfaces.ts";
import {CustomButton} from "../ui/CustomButton";
import {CustomModal} from "../ui/CustomModal";
import {ExpenseForm} from "../ExpenseForm";

export const ExpensesStats: React.FC = () => {
    const expenses: IExpense[] = useSelector<RootState, IExpense[]>((state) => state.expenses);
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const totalExpenses: number = expenses.length;
    const totalAmount: number = expenses.reduce((sum: number, expense: IExpense) => sum + expense.amount, 0);
    const averageAmount: number = totalExpenses > 0 ? totalAmount / totalExpenses : 0;
    const maxExpense: number = expenses.length > 0 ? Math.max(...expenses.map((e: IExpense) => e.amount)) : 0;
    const minExpense: number = expenses.length > 0 ? Math.min(...expenses.map((e: IExpense) => e.amount)) : 0;

    return (
        <>
            <Box
                sx={{
                    width: "90vw",
                    mt: 5,
                    mx: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Paper
                    sx={{
                        width: "100%",
                        p: 4,
                        borderRadius: 2,
                        boxShadow: 3,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h5" mb={3}>
                        📊 Статистика расходов
                    </Typography>
                    <Typography variant="body1">📌 Количество расходов: <b>{totalExpenses}</b></Typography>
                    <Typography variant="body1">💰 Общая сумма: <b>{totalAmount.toLocaleString()} ₽</b></Typography>
                    <Typography variant="body1">📊 Средний расход: <b>{averageAmount.toLocaleString()} ₽</b></Typography>
                    <Typography variant="body1">🔼 Самый дорогой: <b>{maxExpense.toLocaleString()} ₽</b></Typography>
                    <Typography variant="body1">🔽 Самый дешевый: <b>{minExpense.toLocaleString()} ₽</b></Typography>
                    <CustomButton label={"Добавить расход"} disabled={modalOpened} onClick={() => setModalOpened(true)}/>
                </Paper>
            </Box>
            <CustomModal open={modalOpened} onClose={() => setModalOpened(false)}>
                <ExpenseForm onSubmit={() => setModalOpened(false)}/>
            </CustomModal>
        </>
    );
};
