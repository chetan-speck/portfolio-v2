// ------------------------------------------------------------------------------------------

import { format } from 'date-fns';
import Link from 'next/link';
import { FC, JSX } from 'react';

import { Box, Card, Container, Stack, Typography } from '@mui/material';

// ------------------------------------------------------------------------------------------

interface ExperienceItem {
    company: string;
    companySite: string;
    location: string;
    role: string;
    startDate: Date;
    endDate: Date | 'Present';
    summary: string;
}

// ------------------------------------------------------------------------------------------

const experience: ExperienceItem[] = [
    {
        company: 'Synextic Global Business Solution Pvt Ltd.',
        companySite: 'https://synexticglobal.com/',
        location: 'Pune',
        role: 'Full-stack Developer',
        startDate: new Date('2024-09-16'),
        endDate: 'Present',
        summary:
            'Engaged in full-stack web development, building scalable applications using React.js and Node.js, integrating REST APIs and implementing secure authentication and authorization mechanisms. Collaborated with UX/UI designers and backend teams to ensure seamless integration and functionality, conducted code reviews to maintain code quality, implemented responsive and accessible design standards and contributed to optimizing performance and user experience for complex web applications.',
    },
    {
        company: 'CrystalTechnosoft',
        companySite: 'https://crystaltechnosoft.com/',
        location: 'Nagpur',
        role: 'Full-stack Developer',
        startDate: new Date('2024-04-01'),
        endDate: new Date('2024-07-31'),
        summary:
            'Worked on the Goods Management project, focusing on frontend development using React.js and Material-UI, while integrating APIs for dynamic data handling. Ensured responsive and user-friendly design across devices, collaborated with backend teams to define and implement API requirements, participated in agile development cycles including sprint planning, conducted testing and debugging and provided technical documentation and support for the user panel features.',
    },
    {
        company: 'M-SOFTS',
        companySite: 'https://msofts.in/',
        location: 'Bhusawal',
        role: 'Full-stack Developer',
        startDate: new Date('2022-12-01'),
        endDate: new Date('2024-02-29'),
        summary:
            'Led full-stack development projects using React.js, Node.js, and Express.js, building scalable web applications. Managed MySQL databases for efficient data handling, designed and implemented REST APIs to support frontend-backend communication, integrated JWT-based authentication for secure access, provided mentorship to junior and intern developers, conducted regular code reviews to ensure adherence to best practices and collaborated with cross-functional teams to deliver high-quality solutions.',
    },
    {
        company: 'Ecomperor',
        companySite: 'http://ecomperor.com/',
        location: 'Kalyan',
        role: 'Frontend Developer',
        startDate: new Date('2022-01-01'),
        endDate: new Date('2022-11-30'),
        summary:
            'Developed responsive and user-friendly web applications using React.js, ensuring cross-device and cross-browser compatibility. Integrated REST APIs for seamless data communication, collaborated closely with backend developers to maintain functional integration, conducted code reviews, implemented design specifications provided by UX/UI teams and contributed to improving code quality and overall user experience.',
    },
    {
        company: 'Ecomperor',
        companySite: 'http://ecomperor.com/',
        location: 'Bhusawal',
        role: 'Intern',
        startDate: new Date('2021-07-01'),
        endDate: new Date('2021-12-31'),
        summary:
            'Frontend web development internship focused on enhancing user experience by developing frontend components using HTML, CSS and JavaScript. Assisted in integrating React.js functionality, connecting REST APIs for data retrieval and updates, troubleshooting frontend issues, participating in team meetings to discuss project progress and contributing ideas to improve the overall interface and interactivity of web applications.',
    },
];

// ------------------------------------------------------------------------------------------

const Experience: FC = (): JSX.Element => {
    return (
        <Box
            component='section'
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
                        Experience
                    </Typography>
                    <Stack
                        direction='column'
                        spacing={{ xs: 2, sm: 3 }}
                    >
                        {experience.map(
                            ({
                                company,
                                companySite,
                                location,
                                role,
                                startDate,
                                endDate,
                                summary,
                            }) => {
                                const duration = `${format(startDate, 'MMM yyyy')} - ${endDate === 'Present' ? 'Present' : format(endDate, 'MMM yyyy')}`;

                                return (
                                    <Card
                                        key={duration}
                                        elevation={0}
                                        sx={{
                                            borderRadius: 4,
                                            p: { xs: 2, sm: 3 },
                                            width: '100%',
                                            height: '100%',
                                            borderLeftWidth: '2px',
                                            borderLeftStyle: 'solid',
                                            borderLeftColor:
                                                endDate === 'Present'
                                                    ? 'primary.main'
                                                    : 'transparent',
                                        }}
                                    >
                                        <Stack
                                            direction='column'
                                            spacing={2}
                                        >
                                            <Stack
                                                direction={{ xs: 'column', sm: 'row' }}
                                                alignItems='start'
                                                justifyContent='space-between'
                                                spacing={2}
                                            >
                                                <Typography
                                                    href={companySite}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                    component={Link}
                                                    variant='body1'
                                                    sx={{
                                                        fontSize: '18px',
                                                        fontWeight: 500,
                                                        color: 'text.primary',
                                                        textDecoration: 'none',
                                                        WebkitTapHighlightColor: 'transparent',
                                                        '&:hover': {
                                                            color: 'primary.main',
                                                        },
                                                    }}
                                                >
                                                    {role} at {company}, based in {location}
                                                </Typography>
                                                <Typography variant='body2'>{duration}</Typography>
                                            </Stack>
                                            <Typography
                                                variant='body2'
                                                sx={{
                                                    color: 'text.secondary',
                                                }}
                                            >
                                                {summary}
                                            </Typography>
                                        </Stack>
                                    </Card>
                                );
                            }
                        )}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

// ------------------------------------------------------------------------------------------

export default Experience;

// ------------------------------------------------------------------------------------------
