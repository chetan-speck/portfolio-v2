// ------------------------------------------------------------------------------------------

import Image from 'next/image';
import { FC, JSX } from 'react';

import ProfilePhoto from '@/assets/profile.jpg';
import contactInfo from '@/constants/contactInfo';
import getDuration from '@/utils/getDuration';
import { GitHub, LinkedIn, MailOutline, PhoneOutlined } from '@mui/icons-material';
import { Box, Button, Chip, Container, Grid, Stack, Tooltip, Typography } from '@mui/material';

// ------------------------------------------------------------------------------------------

const Landing: FC = (): JSX.Element => {
    return (
        <Box
            component='section'
            sx={{
                minHeight: { xs: 'fit-content', sm: '100vh' },
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container
                sx={{
                    py: { xs: 8, sm: 12 },
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 2, sm: 3 }}
                    direction={{ xs: 'column-reverse', sm: 'row' }}
                    alignItems='center'
                >
                    <Grid size={{ xs: 12, sm: 6.5 }}>
                        <Stack spacing={{ xs: 2, sm: 3 }}>
                            <Stack spacing={1}>
                                <Typography
                                    component='p'
                                    sx={{ color: 'text.secondary' }}
                                >
                                    Hi there, I am
                                </Typography>
                                <Typography
                                    component='h1'
                                    variant='h1'
                                    sx={{ color: 'text.primary', fontSize: { xs: 42, sm: 72 } }}
                                >
                                    Chetan Thosare
                                </Typography>
                                <Chip
                                    color='primary'
                                    variant='outlined'
                                    label='Full-Stack Developer'
                                    sx={{
                                        width: 'fit-content',
                                    }}
                                />
                            </Stack>
                            <Stack spacing={{ xs: 2, sm: 3 }}>
                                <Typography
                                    component='p'
                                    sx={{ color: 'text.secondary' }}
                                >
                                    With {getDuration(new Date('2021-07-26'), new Date())} of
                                    hands-on experience, I genuinely enjoy being part of something
                                    in progress and find real joy in the process of creating and
                                    bringing ideas to life.
                                </Typography>
                                <Stack
                                    direction='row'
                                    spacing={1}
                                >
                                    <Tooltip title='Call'>
                                        <Button
                                            color='inherit'
                                            size='medium'
                                            variant='outlined'
                                            sx={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: 5,
                                                p: 0,
                                                minWidth: 0,
                                            }}
                                            component='a'
                                            href={`tel:${contactInfo.phone}`}
                                        >
                                            <PhoneOutlined />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title='Send Email'>
                                        <Button
                                            color='inherit'
                                            size='medium'
                                            variant='outlined'
                                            sx={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: 5,
                                                p: 0,
                                                minWidth: 0,
                                            }}
                                            component='a'
                                            href={`mailto:${contactInfo.email}`}
                                        >
                                            <MailOutline />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title='View GitHub Profile'>
                                        <Button
                                            color='inherit'
                                            size='medium'
                                            variant='outlined'
                                            sx={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: 5,
                                                p: 0,
                                                minWidth: 0,
                                            }}
                                            component='a'
                                            href={contactInfo.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <GitHub />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title='View LinkedIn Profile'>
                                        <Button
                                            color='inherit'
                                            size='medium'
                                            variant='outlined'
                                            sx={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: 5,
                                                p: 0,
                                                minWidth: 0,
                                            }}
                                            component='a'
                                            href={contactInfo.linkedin}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <LinkedIn />
                                        </Button>
                                    </Tooltip>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5.5 }}>
                        <Box
                            sx={{
                                width: '100%',
                                overflow: 'hidden',
                                borderRadius: 16,
                                aspectRatio: '4 / 3',
                                position: 'relative',
                            }}
                        >
                            <Image
                                src={ProfilePhoto}
                                alt='Chetan Thosare'
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// ------------------------------------------------------------------------------------------

export default Landing;

// ------------------------------------------------------------------------------------------
