// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import { FC, JSX } from 'react';

import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import {
    Box,
    Container,
    IconButton,
    Stack,
    Tooltip,
    Typography,
    useColorScheme,
} from '@mui/material';

// ------------------------------------------------------------------------------------------

const Footer: FC = (): JSX.Element => {
    const { colorScheme, setColorScheme } = useColorScheme();

    const toggleTheme = () => {
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
    };

    return (
        <Box
            component='footer'
            sx={{
                borderTopWidth: '1px',
                borderTopStyle: 'solid',
                borderTopColor: 'divider',
            }}
        >
            <Container>
                <Stack
                    direction='row'
                    spacing={{ xs: 2, sm: 3 }}
                    alignItems='center'
                    justifyContent='space-between'
                    sx={{ py: 2 }}
                >
                    <Typography
                        variant='body2'
                        sx={{ textAlign: 'center' }}
                    >
                        &copy; {new Date().getFullYear()} Chetan Thosare. All rights reserved.
                    </Typography>
                    <Tooltip
                        title={
                            colorScheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
                        }
                    >
                        <IconButton
                            size='small'
                            onClick={toggleTheme}
                        >
                            {colorScheme === 'light' ? (
                                <DarkModeOutlined fontSize='small' />
                            ) : (
                                <LightModeOutlined fontSize='small' />
                            )}
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Container>
        </Box>
    );
};

// ------------------------------------------------------------------------------------------

export default Footer;

// ------------------------------------------------------------------------------------------
