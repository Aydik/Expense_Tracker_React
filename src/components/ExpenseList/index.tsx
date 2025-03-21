import React, {useEffect, useState} from "react";
import {IExpense} from "../Expense/index.interfaces.ts";
import {Expense} from "../Expense";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Box} from "@mui/material";
import {SelectBox} from "../ui/SelectBox";
import {ReverseMode, SortMode, sortOptions} from "./index.interface.ts";
import {ReverseButton} from "../ui/ReverseButton";
import {useFilteredExpenses} from "../../hooks/useFilteredExpenses.ts";
import {LoadingComponent} from "../ui/LodingComponent"; // Импортируем хук

export const ExpenseList: React.FC = () => {
    const expenses: IExpense[] = useSelector((state: RootState) => state.expenses);

    const [sortMode, setSortMode] = useState<SortMode>("");
    const [reverseMode, setReverseMode] = useState<ReverseMode>(null);

    useEffect(() => {
        if (sortMode !== "") setReverseMode(true);
        else setReverseMode(null);
    }, [sortMode]);

    const {filteredExpenses, loading} = useFilteredExpenses(expenses, sortMode, reverseMode);

    return (
        <Box sx={{width: "90vw", margin: "0 auto", boxSizing: "border-box", padding: 2}}>
            <Box>
                <SelectBox<SortMode> value={sortMode} onChange={setSortMode} options={sortOptions} label="Сортировка"/>
                {reverseMode !== null && (
                    <ReverseButton value={reverseMode} onClick={() => setReverseMode(!reverseMode)}/>
                )}
            </Box>
            <Box sx={{width: 600, margin: "0 auto", paddingBottom: 5}}>
                {loading ? (
                    <LoadingComponent/>
                ) : (
                    <ul>
                        {filteredExpenses.map((expense: IExpense) => (
                            <li style={{listStyle: "none"}} key={expense.id}>
                                <Expense expense={expense}/>
                            </li>
                        ))}
                    </ul>
                )}
            </Box>
        </Box>
    );
};
