import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {SelectBoxProps} from "./index.interfaces.ts";

export function SelectBox<T extends string | number>({value, onChange, options, label}: SelectBoxProps<T>) {
    return (
        <FormControl sx={{minWidth: 150}}>
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                labelId="select-label"
                id="select-box"
                value={value}
                label={label}
                onChange={(event: SelectChangeEvent<T>) => onChange(event.target.value as T)}
                sx={{
                    borderRadius: 2,
                    bgcolor: "white",
                    boxShadow: 1,
                    height: "50px",
                    "& .MuiSelect-select": {
                        padding: "8px 12px",
                        display: "flex",
                        alignItems: "center",
                    },
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            borderRadius: 2,
                            boxShadow: 3,
                            mt: 1,
                            "& .MuiMenuItem-root": {
                                px: 2,
                                py: 1,
                                fontSize: "1rem",
                                display: "flex",
                                gap: 1,
                            },
                            "&[inert] *": {
                                pointerEvents: "none",
                            },
                        },
                    },
                }}
                variant="outlined"
            >
                {options.map(({value, label}: {
                    value: T,
                    label: string
                }) => (
                    <MenuItem key={String(value)} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
