export interface SelectBoxProps<T extends string | number> {
    value: T;
    onChange: (value: T) => void;
    options: { value: T; label: string }[];
    label: string;
}
