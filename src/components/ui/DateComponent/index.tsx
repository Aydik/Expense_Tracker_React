import { Typography } from "@mui/material";

export function DateComponent({ date}: { date: number }) {
    const formattedDate = new Intl.DateTimeFormat("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(new Date(date));

    return (
        <Typography sx={{ color: "gray", fontSize: 16, fontWeight: 500 }}>
            {formattedDate}
        </Typography>
    );
}