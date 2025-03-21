import React from "react";
import ReactDOM from "react-dom";
import {Box, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {CustomModalProps} from "./index.interfaces.ts";

export const CustomModal: React.FC<CustomModalProps> = ({open, onClose, children}) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onClick={onClose}
        >
            <Box
                sx={{
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 5,
                    textAlign: "center",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <Box sx={{position: "relative"}}>
                    <IconButton
                        onClick={onClose}
                        sx={{
                            color: "lightgrey",
                            position: "absolute",
                            top: -16,
                            right: -16
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                    {children}
                </Box>
            </Box>
        </Box>,
        document.getElementById("modal-root")!
    );
};