import React from "react";

export interface CustomModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode
}