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
                        About Me
                    </Typography>
                    <Stack
                        direction='column'
                        spacing={{ xs: 2, sm: 3 }}
                    >
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            I&#39;m Chetan Thosare. I believe growth comes from curiosity,
                            consistency, and real connections. My journey so far has been about
                            learning, unlearning, and learning again through both challenges and
                            small wins.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            What excites me most is creating something meaningful whether it&#39;s
                            helping people or learning something new every day. I enjoy turning
                            ideas into reality, and I value the relationships I build and the
                            experiences I gain along the way even more.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            I see myself as a lifelong learner, always open to change and
                            improvement. Outside of work, I enjoy simple things like sharing a
                            laugh, thinking about life, and appreciating the small moments that make
                            the journey meaningful.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            I&#39;m truly grateful to everyone who has been part of my journey. Your
                            support, guidance, and presence have helped shape who I am today. To
                            those who helped me grow, thank you for your encouragement. During tough
                            times, your strength kept me going. To my mentors, friends, and
                            supporters - your belief in me meant everything. And to those who
                            doubted me, you pushed me to work harder and prove myself.
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{ color: 'text.primary' }}
                        >
                            If I&#39;ve ever hurt anyone, I&#39;m sorry. I&#39;m human, and I may
                            have made mistakes without meaning to. Thank you for being part of my
                            journey - I truly appreciate it.
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
