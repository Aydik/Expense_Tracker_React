export interface CustomInputProps {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type: "text" | "number";
}