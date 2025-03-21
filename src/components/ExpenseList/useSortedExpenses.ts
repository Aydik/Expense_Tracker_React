import {useEffect, useState} from "react";
import {IExpense} from "../Expense/index.interfaces.ts";
import {ReverseMode, SortMode} from "./index.interface.ts";

export const useSortedExpenses = (expenses: IExpense[], sortMode: SortMode, reverseMode: ReverseMode) => {
    const [sortedExpenses, setSortedExpenses] = useState<IExpense[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        const sortExpenses = () => {
            const sorted: IExpense[] = [...expenses];

            switch (sortMode) {
                case "date":
                    sorted.sort((a: IExpense, b: IExpense) => new Date(a.id).getTime() - new Date(b.id).getTime());
                    break;
                case "amount":
                    sorted.sort((a: IExpense, b: IExpense) => a.amount - b.amount);
                    break;
                case "name":
                    sorted.sort((a: IExpense, b: IExpense) => a.name.localeCompare(b.name));
                    break;
                default:
                    break
            }
            if (reverseMode) sorted.reverse();

            setTimeout(() => {
                setSortedExpenses(sorted);
                setLoading(false);
            }, Math.random() * 500);
        };

        sortExpenses();
    }, [sortMode, reverseMode, expenses]);

    return {sortedExpenses, loading};
};
