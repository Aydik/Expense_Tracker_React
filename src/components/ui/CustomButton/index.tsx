import React from "react";
import Button from "@mui/material/Button";
import {CustomButtonProps} from "./index.interfaces.ts";

export const CustomButton: React.FC<CustomButtonProps> = ({ label, disabled, onClick }) => {
    return (
        <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={disabled}
            sx={{
                mt: 2,
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                borderRadius: "8px",
                p: 1.5,
                backgroundColor: "#1976d2",
                "&:hover": {
                    backgroundColor: "#1565c0",
                },
            }}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};
