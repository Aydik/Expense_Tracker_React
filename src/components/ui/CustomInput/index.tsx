import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import {CustomInputProps} from "./index.interfaces.ts";

export const CustomInput: React.FC<CustomInputProps> = ({ label, value, onChange, type }) => {

    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth
            value={value}
            onChange={(e) => {
                if (type === "number") {
                    const newValue = e.target.value.replace(/\D/g, "").slice(0, 12);
                    onChange(newValue);
                } else {
                    onChange(e.target.value);
                }
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault(); // Блокируем сброс формы
                }
            }}
            margin="normal"
            InputProps={{
                endAdornment: type === "number" ? <InputAdornment position="end">₽</InputAdornment> : null,
                sx: {
                    fontWeight: type === "number" ? "bold" : "normal",
                    textAlign: type === "number" ? "right" : "left",
                    fontSize: "1.1rem",
                    borderRadius: "8px",
                },
            }}
            sx={{
                "& input": {
                    MozAppearance: "textfield",
                },
                "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": {
                    WebkitAppearance: "none",
                    margin: 0,
                },
            }}
        />
    );
};
