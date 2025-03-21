export type SortMode = "" | "date" | "amount" | "name";

export const sortOptions: { value: SortMode; label: string }[] = [
    { value: "", label: "..." },
    { value: "date", label: "По дате" },
    { value: "amount", label: "По сумме" },
    { value: "name", label: "По имени" },
];

export type ReverseMode = null | true | false;