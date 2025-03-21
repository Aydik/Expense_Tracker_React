import React from 'react';
import {Box} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

export const LoadingComponent: React.FC = () => {
    return (
        <>
            <style>
                {`
                  @keyframes spin {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                `}
            </style>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingY: 15,
                }}
            >
                <RefreshIcon
                    sx={{
                        color: 'lightgrey',
                        fontSize: 100,
                        animation: 'spin 0.5s infinite ease-in',
                    }}
                />
            </Box>
        </>
    );
};
