import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useDispatch} from "react-redux";
import {AppDispatch, addExpense} from '../../store';

export const ExpenseForm: React.FC = () => {

    const [name, setName] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)

    const dispatch: AppDispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(addExpense({
            id: Date.now(),
            name: name,
            amount: amount,
        }));

        setName("");
        setAmount(0);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Имя:</label>
                <TextField type="text"
                           name="name"
                           placeholder="Иван Иванов"
                           required
                           value={name}
                           onChange={(e) =>
                               setName(e.target.value)}
                />

                <label htmlFor="amount">Сумма:</label>
                <TextField type="number"
                           name="amount"
                           placeholder="0"
                           required
                           value={amount}
                           onChange={(e) => {
                               if (e.target.value === "") {
                                   setAmount(0)
                               } else {
                                   const newAmount = parseInt(e.target.value);
                                   if (!Number.isNaN(Number(newAmount))) {
                                       setAmount(newAmount)
                                   }
                               }
                           }}/>

                <Button color="primary" type="submit">Создать</Button>
            </form>
        </div>
    )
}