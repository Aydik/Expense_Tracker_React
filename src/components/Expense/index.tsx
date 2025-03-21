import React, {useState} from "react";
import {IExpenseProps} from "./index.interfaces.ts";
import {useDispatch} from "react-redux";
import {Card, CardContent, Typography, IconButton, Box} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from '@mui/icons-material/Clear';
import {CustomInput} from "../ui/CustomInput";
import {AppDispatch} from "../../store";
import {deleteExpense, editExpense} from "../../store/expenses.ts";
import {format} from "date-fns";
import {ru} from "date-fns/locale/ru";

export const Expense: React.FC<IExpenseProps> = ({expense}: IExpenseProps) => {
    const dispatch: AppDispatch = useDispatch();

    const [name, setName] = useState<string>(expense.name);
    const [amount, setAmount] = useState<string>(expense.amount.toString()); // Храним сумму как строку
    const [editMode, setEditMode] = useState<boolean>(false);

    const [previousName, setPreviousName] = useState<string>("");
    const [previousAmount, setPreviousAmount] = useState<string>("");

    const handleEditButtonClick = () => {
        setEditMode(true);
        setPreviousName(name);
        setPreviousAmount(amount);
    }

    const handleSaveButtonClick = () => {
        if (name && parseInt(amount) > 0) {
            setEditMode(false);
            dispatch(editExpense({id: expense.id, name, amount: parseInt(amount)}));
        }
    }

    const handleClearButtonClick = () => {
        setEditMode(false);
        setName(previousName);
        setAmount(previousAmount);
    }

    return (
        <Card sx={{mt: 2, boxShadow: 3, borderRadius: 5}}>
            <CardContent sx={{ml: 1}}>
                {editMode ? (
                    <>
                        <CustomInput label="Название" value={name} onChange={setName} type="text"/>
                        <CustomInput label="Сумма" value={amount} onChange={setAmount} type="number"/>
                    </>
                ) : (
                    <Box>
                        <Typography variant="h5" fontWeight="bold">
                            {name}
                        </Typography>
                        <Typography variant="h4" color="primary" fontWeight="bold">
                            {amount.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽
                        </Typography>
                    </Box>
                )}
                <Box sx={{display: "flex", justifyContent: "space-between", mt: 1}}>
                    <Typography sx={{color: "gray", fontSize: 16, fontWeight: 500, alignSelf: "end"}}>
                        {format(new Date(expense.id), "dd MMMM yyyy, HH:mm:ss", {locale: ru})}
                    </Typography>
                    <div>
                        {editMode ? (
                            <>
                                <IconButton
                                    color={"success"}
                                    onClick={handleSaveButtonClick}
                                >
                                    <SaveIcon/>
                                </IconButton>
                                <IconButton
                                    color={"error"}
                                    onClick={handleClearButtonClick}
                                >
                                    <ClearIcon/>
                                </IconButton>
                            </>

                        ) : (
                            <IconButton
                                color={"primary"}
                                onClick={handleEditButtonClick}
                            >
                                <EditIcon/>
                            </IconButton>
                        )}
                        <IconButton color="error" onClick={() =>
                            dispatch(deleteExpense(expense.id))}>
                            <DeleteIcon/>
                        </IconButton>
                    </div>
                </Box>
            </CardContent>
        </Card>
    );
};
