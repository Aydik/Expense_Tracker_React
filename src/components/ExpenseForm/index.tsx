import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {CustomInput} from "../ui/CustomInput";
import {CustomButton} from "../ui/CustomButton";
import {AppDispatch} from "../../store";
import {addExpense} from "../../store/expenses.ts";
import {ExpenseFormProps} from "./index.interfaces.ts";

export const ExpenseForm: React.FC<ExpenseFormProps> = ({onSubmit}: ExpenseFormProps) => {
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<string>("");

    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !amount) return;

        dispatch(addExpense({id: Date.now(), name, amount: parseInt(amount)}));
        setName("");
        setAmount("");
        if (onSubmit != undefined) onSubmit();
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 600,
                boxSizing: "border-box",
            }}
        >
            <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
                Добавить расход
            </Typography>
            <CustomInput label="Название расхода" value={name} onChange={setName} type="text"/>
            <CustomInput label="Сумма" value={amount} onChange={setAmount} type="number"/>
            <CustomButton label="Добавить"/>
        </Box>
    );
};
