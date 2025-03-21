import React from "react";
import {ReverseButtonProps} from "./index.interfaces.ts";
import SortIcon from '@mui/icons-material/Sort';
import {IconButton} from "@mui/material";

export const ReverseButton: React.FC<ReverseButtonProps> = ({value, onClick}: ReverseButtonProps) => {
    return (
        <IconButton color="primary" onClick={onClick} sx={{
            borderRadius: 2,
            bgcolor: "white",
            boxShadow: 1,
            height: "50px",
            width: "50px",
            ml: 2,
        }}>
            <SortIcon sx={{transform: value ? "scaleY(1)" : "scaleY(-1)", transition: "transform 0.2s"}}/>
        </IconButton>
    );
};
