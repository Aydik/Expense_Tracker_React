export interface IExpense {
    id: number;
    name: string;
    amount: number;
}

export interface IExpenseProps {
    expense: IExpense;
}