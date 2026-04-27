// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import { createTheme, Theme } from '@mui/material/styles';

// ------------------------------------------------------------------------------------------

const theme: Theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data',
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#865219',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#735942',
                    contrastText: '#ffffff',
                },
                info: {
                    main: '#865219',
                    contrastText: '#ffffff',
                },
                success: {
                    main: '#156e00',
                    contrastText: '#ffffff',
                },
                warning: {
                    main: '#735c00',
                    contrastText: '#ffffff',
                },
                error: {
                    main: '#ba002c',
                    contrastText: '#ffffff',
                },
                background: {
                    default: '#faebe0',
                    paper: '#fff8f5',
                },
                text: {
                    primary: '#211a14',
                    secondary: '#51443a',
                    disabled: '#211a1463',
                },
                divider: '#d5c3b6',
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#fdb876',
                    contrastText: '#4a2800',
                },
                secondary: {
                    main: '#e2c0a4',
                    contrastText: '#412c18',
                },
                info: {
                    main: '#fdb876',
                    contrastText: '#4a2800',
                },
                success: {
                    main: '#85ff64',
                    contrastText: '#073900',
                },
                warning: {
                    main: '#ffd75a',
                    contrastText: '#3c2f00',
                },
                error: {
                    main: '#ffb3b3',
                    contrastText: '#680014',
                },
                background: {
                    default: '#19120c',
                    paper: '#261e18',
                },
                text: {
                    primary: '#efe0d5',
                    secondary: '#d5c3b6',
                    disabled: '#efe0d563',
                },
                divider: '#51443a',
            },
        },
    },
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    spacing: 8,
    shape: {
        borderRadius: 4,
    },
});

// ------------------------------------------------------------------------------------------

export default theme;

// ------------------------------------------------------------------------------------------
