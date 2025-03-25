import React from "react";
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router";


export const NotFoundPage: React.FC = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f5f5f5",
            }}
        >
            <Typography variant="h1" color="error" gutterBottom>
                404
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
                Ой! Страница не найдена.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                sx={{ mt: 2 }}
            >
                На главную
            </Button>
        </Box>
    )
}