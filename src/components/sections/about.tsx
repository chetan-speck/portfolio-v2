// ------------------------------------------------------------------------------------------

import { FC, JSX } from 'react';

import sectionIds from '@/constants/sectionIds';
import { Box, Container, Stack, Typography } from '@mui/material';

// ------------------------------------------------------------------------------------------

const About: FC = (): JSX.Element => {
    return (
        <Box
            component='section'
            id={sectionIds.about}
            sx={{
                borderTopWidth: '1px',
                borderTopStyle: 'solid',
                borderTopColor: 'divider',
            }}
        >
            <Container
                sx={{
                    py: { xs: 8, sm: 12 },
                }}
            >
                <Stack
                    direction='column'
                    spacing={{ xs: 4, sm: 6 }}
                >
                    <Typography
                        component='h2'
                        variant='h2'
                        sx={{
                            color: 'text.primary',
                            fontSize: { xs: 32, sm: 56 },
                            fontWeight: 500,
                        }}
                    >
                        About
                    </Typography>
                    <Stack
                        direction='column'
                        spacing={{ xs: 2, sm: 3 }}
                    >
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            I&#39;m Chetan Thosare. I believe that growth comes from curiosity,
                            consistency and connection. My journey so far has been full of learning,
                            unlearning and rediscovering myself through challenges and small wins.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            What excites me most is creating something meaningful. This could mean
                            solving a problem, helping someone or learning something new each day. I
                            enjoy the process of turning ideas into reality. I value the
                            relationships and lessons that come along the way even more.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            I see myself as a lifelong learner, always eager to explore, change and
                            improve. Outside of work, I find joy in simple things like sharing a
                            laugh, reflecting on life or appreciating the little moments that make
                            the journey worthwhile.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            Looking back on my journey, I&#39;m overwhelmed with gratitude for
                            everyone who contributed to my growth. Your support, guidance and
                            presence have been crucial to my success. To those who helped me learn
                            and grow, thank you for your wisdom and encouragement. In tough times,
                            your strength lifted me. Allies, mentors and champions, your belief in
                            me fueled my determination. Even adversaries, your challenges made me
                            stronger.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            To anyone I&#39;ve wronged, I ask for forgiveness. I&#39;m human and may
                            have made mistakes without meaning to. Thank you for being part of my
                            journey. I am forever grateful.
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

// ------------------------------------------------------------------------------------------

export default About;

// ------------------------------------------------------------------------------------------
