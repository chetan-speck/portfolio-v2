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
                    main: '#3900b0',
                    contrastText: '#ffffff',
                },
                secondary: {
                    main: '#004fd9',
                    contrastText: '#ffffff',
                },
                info: {
                    main: '#3900b0',
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
                    default: '#f1ebfb',
                    paper: '#fdf8ff',
                },
                text: {
                    primary: '#1c1a25',
                    secondary: '#484456',
                    disabled: '#1c1a2563',
                },
                divider: '#c9c3d9',
                grey: {
                    50: '#F4EFF4',
                    100: '#E6E1E6',
                    200: '#C9C5CA',
                    300: '#AEAAAF',
                    400: '#939094',
                    500: '#79767A',
                    600: '#605D62',
                    700: '#48464A',
                    800: '#313033',
                    900: '#1C1B1F',
                    A100: '#FDF8FD',
                    A200: '#FFFBFF',
                    A400: '#3C3B3F',
                    A700: '#111014',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#cabeff',
                    contrastText: '#31009a',
                },
                secondary: {
                    main: '#b5c4ff',
                    contrastText: '#00297a',
                },
                info: {
                    main: '#cabeff',
                    contrastText: '#31009a',
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
                    default: '#14121c',
                    paper: '#201e29',
                },
                text: {
                    primary: '#e6e0ef',
                    secondary: '#c9c3d9',
                    disabled: '#e6e0ef63',
                },
                divider: '#484456',
                grey: {
                    50: '#F4EFF4',
                    100: '#E6E1E6',
                    200: '#C9C5CA',
                    300: '#AEAAAF',
                    400: '#939094',
                    500: '#79767A',
                    600: '#605D62',
                    700: '#48464A',
                    800: '#313033',
                    900: '#1C1B1F',
                    A100: '#FDF8FD',
                    A200: '#FFFBFF',
                    A400: '#3C3B3F',
                    A700: '#111014',
                },
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
