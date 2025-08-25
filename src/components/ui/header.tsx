// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import Image from 'next/image';
import { FC, Fragment, JSX, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

import LogoTypeDarkSvg from '@/assets/logo-type-dark.svg';
import LogoTypeLightSvg from '@/assets/logo-type-light.svg';
import {
    CloseOutlined,
    DarkModeOutlined,
    LightModeOutlined,
    MenuOutlined,
} from '@mui/icons-material';
import {
    AppBar,
    Box,
    Button,
    Container,
    Dialog,
    Divider,
    IconButton,
    Slide,
    Stack,
    Tooltip,
    Typography,
    useColorScheme,
    useScrollTrigger,
} from '@mui/material';

// ------------------------------------------------------------------------------------------

const sections = ['Skills', 'Experience', 'Projects', 'About', 'Contact'];

// ------------------------------------------------------------------------------------------

const Header: FC = (): JSX.Element => {
    const trigger = useScrollTrigger({ threshold: 10 });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [blur, setBlur] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const [pieces, setPieces] = useState(0);
    const { width, height } = useWindowSize();
    const { colorScheme, setColorScheme } = useColorScheme();

    const toggleTheme = () => {
        setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
    };

    const handleLogoDoubleClick = () => {
        if (showConfetti) return;

        setShowConfetti(true);
        setPieces(1000);

        setTimeout(() => {
            setPieces(0);

            setTimeout(() => {
                setShowConfetti(false);
            }, 4000);
        }, 8000);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newBlur = Math.min(scrollY / 12.5, 8);
        setBlur(newBlur);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setDrawerOpen(false);
    };

    return (
        <>
            <Slide
                appear={false}
                direction='down'
                in={!trigger}
            >
                <AppBar
                    color='transparent'
                    elevation={0}
                    sx={{
                        height: '64px',
                        pointerEvents: 'none',
                        position: 'fixed',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            backdropFilter: `blur(${blur}px)`,
                            maskImage:
                                'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))',
                            WebkitMaskImage:
                                'linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0))',
                            borderRadius: 0,
                            zIndex: 0,
                        }}
                    />
                    <Container
                        sx={{
                            height: '100%',
                            position: 'relative',
                            zIndex: 1,
                            pointerEvents: 'auto',
                        }}
                    >
                        <Stack
                            direction='row'
                            alignItems='center'
                            justifyContent='space-between'
                            sx={{ height: '100%' }}
                        >
                            <Image
                                src={
                                    colorScheme === 'light'
                                        ? LogoTypeDarkSvg.src
                                        : LogoTypeLightSvg.src
                                }
                                alt='Logo'
                                height={24}
                                width={100}
                                priority
                                onClick={() => handleNavClick('landing')}
                                onDoubleClick={handleLogoDoubleClick}
                            />
                            <Stack
                                direction='row'
                                spacing={1}
                                sx={{ display: { xs: 'none', md: 'flex' } }}
                            >
                                {sections.map((section) => (
                                    <Button
                                        key={section}
                                        onClick={() => handleNavClick(section.toLowerCase())}
                                        sx={{
                                            color: 'text.primary',
                                            textTransform: 'unset',
                                            borderRadius: 8,
                                            px: 2,
                                        }}
                                    >
                                        {section}
                                    </Button>
                                ))}
                            </Stack>
                            <IconButton
                                onClick={() => setDrawerOpen(true)}
                                sx={{
                                    display: {
                                        xs: 'flex',
                                        md: 'none',
                                    },
                                }}
                            >
                                <MenuOutlined />
                            </IconButton>
                        </Stack>
                    </Container>
                </AppBar>
            </Slide>
            <Dialog
                fullScreen
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Stack
                    sx={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'background.default',
                    }}
                    spacing={2}
                >
                    <Stack
                        sx={{
                            height: '64px',
                            px: 2,
                        }}
                        direction='row'
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Image
                            src={
                                colorScheme === 'light' ? LogoTypeDarkSvg.src : LogoTypeLightSvg.src
                            }
                            alt='Logo'
                            height={24}
                            width={100}
                            priority
                        />
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseOutlined />
                        </IconButton>
                    </Stack>
                    <Stack
                        direction='column'
                        spacing={2}
                        sx={{ px: 2, flex: 1 }}
                        justifyContent='space-between'
                    >
                        <Stack
                            direction='column'
                            spacing={1}
                        >
                            {sections.map((section) => {
                                return (
                                    <Fragment key={section}>
                                        <Button
                                            onClick={() => handleNavClick(section.toLowerCase())}
                                            sx={{
                                                color: 'text.primary',
                                                textTransform: 'unset',
                                                px: 2,
                                                justifyContent: 'start',
                                                borderRadius: 8,
                                            }}
                                            size='large'
                                        >
                                            {section}
                                        </Button>
                                        <Divider />
                                    </Fragment>
                                );
                            })}
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={{ xs: 2, sm: 3 }}
                            alignItems='center'
                            justifyContent='space-between'
                            sx={{
                                py: 2,
                            }}
                        >
                            <Typography
                                variant='body2'
                                sx={{ textAlign: 'center' }}
                            >
                                &copy; {new Date().getFullYear()} Chetan Thosare. All rights
                                reserved.
                            </Typography>
                            <Tooltip
                                title={
                                    colorScheme === 'light'
                                        ? 'Switch to dark mode'
                                        : 'Switch to light mode'
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
                    </Stack>
                </Stack>
            </Dialog>
            {showConfetti && width > 0 && height > 0 && (
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={pieces}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 9999,
                    }}
                />
            )}
        </>
    );
};

// ------------------------------------------------------------------------------------------

export default Header;

// ------------------------------------------------------------------------------------------
