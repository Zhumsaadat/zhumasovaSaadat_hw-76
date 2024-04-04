import React from 'react';
import { Toolbar, Typography } from '@mui/material';

const AppToolbar = () => {
    return (
        <AppToolbar position="sticky" sx={{mb:2}}>
            <Toolbar>
                <Typography variant="h6" component="div">Chat</Typography>
            </Toolbar>
        </AppToolbar>
    );
};

export default AppToolbar;