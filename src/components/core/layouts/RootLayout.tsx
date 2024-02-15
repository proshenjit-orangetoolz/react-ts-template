import React from 'react';
import { Outlet } from 'react-router-dom';
import { Stack } from 'convertupleads-theme';

const RootLayout: React.FC = () => {
    return (
        <Stack direction={'row'} sx={{ height: '100vh', overflow: 'hidden' }}>
            <Outlet />
        </Stack>
    );
};

export default RootLayout;
