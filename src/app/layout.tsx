// ------------------------------------------------------------------------------------------

import { Roboto } from 'next/font/google';
import { FC, JSX, ReactNode } from 'react';

import theme from '@/config/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import type { Metadata } from 'next';

// ------------------------------------------------------------------------------------------

export const metadata: Metadata = {
    title: 'Chetan Thosare • Portfolio',
    description:
        'A collection of my work as a full-stack developer, highlighting real-world projects, problem-solving, and the technologies I use to build scalable web apps.',
};

// ------------------------------------------------------------------------------------------

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

// ------------------------------------------------------------------------------------------

interface Props {
    readonly children: ReactNode;
}

// ------------------------------------------------------------------------------------------

const Layout: FC<Props> = ({ children }): JSX.Element => {
    return (
        <html
            lang='en'
            className={roboto.variable}
            suppressHydrationWarning
        >
            <body>
                <InitColorSchemeScript
                    attribute='data'
                    defaultMode='system'
                />
                <AppRouterCacheProvider>
                    <ThemeProvider
                        theme={theme}
                        defaultMode='system'
                        disableTransitionOnChange
                    >
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

// ------------------------------------------------------------------------------------------

export default Layout;

// ------------------------------------------------------------------------------------------
