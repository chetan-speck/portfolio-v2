// ------------------------------------------------------------------------------------------

import Image from 'next/image';
import Link from 'next/link';
import { FC, JSX } from 'react';
import { IconType } from 'react-icons';
import {
    SiCss3,
    SiExpress,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiJsonwebtokens,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiReact,
    SiSass,
    SiThreedotjs,
    SiTypescript,
} from 'react-icons/si';

import LuminousGlobeThumbnail from '@/assets/luminous-globe-thumbnail.png';
import NumericHorizonThumbnail from '@/assets/numeric-horizon-thumbnail.png';
import sectionIds from '@/constants/sectionIds';
import { OpenInNewOutlined } from '@mui/icons-material';
import {
    Box,
    Card,
    Chip,
    Container,
    Divider,
    Grid,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';

// ------------------------------------------------------------------------------------------

interface TechStackItem {
    icon: IconType;
    label: string;
}

interface ProfessionalProjectItem {
    name: string;
    company: string;
    description: string;
    techStack: TechStackItem[];
}

interface PersonalProjectItem {
    name: string;
    description: string;
    techStack: TechStackItem[];
    thumbnail: string;
    url: string;
}

// ------------------------------------------------------------------------------------------

const professionalProjects: ProfessionalProjectItem[] = [
    {
        name: 'Cargojet',
        company: 'CrystalTechnosoft',
        description:
            'Cargojet is a comprehensive web platform designed to manage goods and transportation across states and interstate. It includes features for managing various branches responsible for receiving and delivering goods, as well as functionalities for user management and generating essential documents such as bills, statements, quotations and memos.',
        techStack: [
            { icon: SiHtml5, label: 'HTML' },
            { icon: SiCss3, label: 'CSS' },
            { icon: SiJavascript, label: 'JavaScript' },
            { icon: SiTypescript, label: 'TypeScript' },
            { icon: SiReact, label: 'React.js' },
            { icon: SiNodedotjs, label: 'Node.js' },
            { icon: SiExpress, label: 'Express.js' },
            { icon: SiMongodb, label: 'MongoDB' },
            { icon: SiJsonwebtokens, label: 'JWT' },
            { icon: SiGit, label: 'Git' },
        ],
    },
    {
        name: 'Team Task Manager',
        company: 'M-SOFTS',
        description:
            'Team Task Manager is a comprehensive task management web application inspired by Microsoft Tasklist. It allows users to create, track and manage tasks across various statuses such as pending, working and completed. Users can set reminders add and save notes, share notes with team members and assign tasks to collaborators, enhancing team productivity and coordination.',
        techStack: [
            { icon: SiHtml5, label: 'HTML' },
            { icon: SiCss3, label: 'CSS' },
            { icon: SiSass, label: 'SCSS' },
            { icon: SiJavascript, label: 'JavaScript' },
            { icon: SiTypescript, label: 'TypeScript' },
            { icon: SiReact, label: 'React.js' },
            { icon: SiNodedotjs, label: 'Node.js' },
            { icon: SiExpress, label: 'Express.js' },
            { icon: SiMysql, label: 'MySQL' },
            { icon: SiJsonwebtokens, label: 'JWT' },
            { icon: SiGit, label: 'Git' },
        ],
    },
    {
        name: 'Bhusawal Division Catering Vendor ID',
        company: 'M-SOFTS',
        description:
            'The Bhusawal Division Catering Vendor ID application is a platform designed to facilitate the registration and verification process for catering vendors associated with the railway division. It includes both a mobile and web application interface, ensuring accessibility and ease of use for vendors and administrators alike.',
        techStack: [
            { icon: SiHtml5, label: 'HTML' },
            { icon: SiCss3, label: 'CSS' },
            { icon: SiSass, label: 'SCSS' },
            { icon: SiJavascript, label: 'JavaScript' },
            { icon: SiReact, label: 'React.js' },
            { icon: SiNodedotjs, label: 'Node.js' },
            { icon: SiExpress, label: 'Express.js' },
            { icon: SiMysql, label: 'MySQL' },
            { icon: SiJsonwebtokens, label: 'JWT' },
            { icon: SiGit, label: 'Git' },
        ],
    },
    {
        name: 'Gym Management',
        company: 'Ecomperor',
        description:
            'The gym management application is a comprehensive software solution designed to streamline various aspects of gym operations and member management. It includes membership management, attendance tracking, class scheduling, billing and invoicing, inventory management, reporting and analytics, security and access control and mobile accessibility.',
        techStack: [
            { icon: SiHtml5, label: 'HTML' },
            { icon: SiCss3, label: 'CSS' },
            { icon: SiSass, label: 'SCSS' },
            { icon: SiTypescript, label: 'TypeScript' },
            { icon: SiReact, label: 'React.js' },
            { icon: SiJsonwebtokens, label: 'JWT' },
            { icon: SiGit, label: 'Git' },
        ],
    },
    {
        name: 'Food Delivery Application',
        company: 'Ecomperor',
        description:
            'A food delivery application designed to provide a convenient way for users to order food from various restaurants and have it delivered to their doorstep. Features include a user-friendly interface, search functionality, secure authentication, online payment integration, customizable profiles, interactive maps, ratings and admin dashboard.',
        techStack: [
            { icon: SiHtml5, label: 'HTML' },
            { icon: SiCss3, label: 'CSS' },
            { icon: SiSass, label: 'SCSS' },
            { icon: SiJavascript, label: 'JavaScript' },
            { icon: SiReact, label: 'React.js' },
            { icon: SiGit, label: 'Git' },
        ],
    },
    {
        name: 'Online Book Store',
        company: 'Ecomperor',
        description:
            'An online bookstore offering a diverse range of books across various genres. It includes a user-friendly interface, extensive catalog, book recommendations, customer reviews, secure payments and seamless order tracking for a convenient online shopping experience.',
        techStack: [
            { icon: SiHtml5, label: 'HTML' },
            { icon: SiCss3, label: 'CSS' },
            { icon: SiJavascript, label: 'JavaScript' },
            { icon: SiReact, label: 'React.js' },
        ],
    },
];

const personalProjects: PersonalProjectItem[] = [
    {
        name: 'Luminous Globe',
        description:
            'An interactive 3D Earth visualization featuring smooth controls, realistic atmospheric lighting and a visually rich, dynamic representation of the planet. Users can explore the globe, view continents and oceans in high detail and enjoy an immersive 3D experience.',
        techStack: [
            { icon: SiHtml5, label: 'HTML' },
            { icon: SiCss3, label: 'CSS' },
            { icon: SiSass, label: 'SCSS' },
            { icon: SiJavascript, label: 'JavaScript' },
            { icon: SiTypescript, label: 'TypeScript' },
            { icon: SiReact, label: 'React.js' },
            { icon: SiThreedotjs, label: 'Three.js' },
            { icon: SiGit, label: 'Git' },
        ],
        thumbnail: LuminousGlobeThumbnail.src,
        url: 'https://luminous-globe.netlify.app/',
    },
    {
        name: 'Numeric Horizon',
        description:
            'A modern, user-friendly scientific calculator built with React, TypeScript and Material-UI. It supports standard and advanced mathematical operations, provides an intuitive interface and ensures responsive performance across devices.',
        techStack: [
            { icon: SiHtml5, label: 'HTML' },
            { icon: SiCss3, label: 'CSS' },
            { icon: SiJavascript, label: 'JavaScript' },
            { icon: SiTypescript, label: 'TypeScript' },
            { icon: SiReact, label: 'React.js' },
            { icon: SiGit, label: 'Git' },
        ],
        thumbnail: NumericHorizonThumbnail.src,
        url: 'https://numeric-horizon.netlify.app/',
    },
];

// ------------------------------------------------------------------------------------------

const Projects: FC = (): JSX.Element => {
    return (
        <Box
            component='section'
            id={sectionIds.projects}
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
                        Projects
                    </Typography>
                    <Stack
                        direction='column'
                        spacing={{ xs: 2, sm: 3 }}
                    >
                        <Typography
                            component='h6'
                            variant='h6'
                            sx={{
                                color: 'text.secondary',
                                fontSize: '18px',
                                fontWeight: 500,
                            }}
                        >
                            Company & Professional Projects
                        </Typography>
                        <Grid
                            container
                            spacing={{ xs: 2, sm: 3 }}
                        >
                            {professionalProjects.map(
                                ({ name, company, description, techStack }) => {
                                    return (
                                        <Grid
                                            key={name}
                                            size={{ xs: 12, sm: 6 }}
                                        >
                                            <Card
                                                key={name}
                                                elevation={0}
                                                sx={{
                                                    height: '100%',
                                                    borderRadius: 4,
                                                    p: { xs: 2, sm: 3 },
                                                }}
                                            >
                                                <Stack
                                                    direction='column'
                                                    spacing={2}
                                                >
                                                    <Stack
                                                        direction='column'
                                                        spacing={2}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize: '18px',
                                                                fontWeight: 500,
                                                                color: 'text.primary',
                                                            }}
                                                        >
                                                            {name}
                                                        </Typography>
                                                        <Typography
                                                            variant='body2'
                                                            sx={{
                                                                color: 'text.secondary',
                                                            }}
                                                        >
                                                            {description}
                                                        </Typography>
                                                        <Divider />
                                                        <Typography
                                                            variant='body2'
                                                            sx={{ color: 'text.secondary' }}
                                                        >
                                                            Project developed at{' '}
                                                            <Box component='strong'>{company}</Box>
                                                        </Typography>
                                                    </Stack>
                                                    <Stack
                                                        direction='column'
                                                        spacing={2}
                                                    >
                                                        <Stack
                                                            direction='row'
                                                            sx={{
                                                                flexWrap: 'wrap',
                                                                gap: 0.5,
                                                            }}
                                                        >
                                                            {techStack.map(({ icon, label }) => {
                                                                const Icon = icon;
                                                                return (
                                                                    <Chip
                                                                        key={label}
                                                                        icon={<Icon />}
                                                                        label={label}
                                                                        sx={{
                                                                            p: 1,
                                                                            width: 'fit-content',
                                                                        }}
                                                                    />
                                                                );
                                                            })}
                                                        </Stack>
                                                    </Stack>
                                                </Stack>
                                            </Card>
                                        </Grid>
                                    );
                                }
                            )}
                        </Grid>
                    </Stack>
                    <Stack
                        direction='column'
                        spacing={{ xs: 2, sm: 3 }}
                    >
                        <Typography
                            component='h6'
                            variant='h6'
                            sx={{
                                color: 'text.secondary',
                                fontSize: '18px',
                                fontWeight: 500,
                            }}
                        >
                            Personal Projects
                        </Typography>
                        <Grid
                            container
                            spacing={{ xs: 2, sm: 3 }}
                        >
                            {personalProjects.map(
                                ({ name, description, techStack, thumbnail, url }) => {
                                    return (
                                        <Grid
                                            key={name}
                                            size={{ xs: 12, sm: 6 }}
                                        >
                                            <Card
                                                key={name}
                                                elevation={0}
                                                sx={{
                                                    height: '100%',
                                                    borderRadius: 4,
                                                    p: { xs: 2, sm: 3 },
                                                }}
                                            >
                                                <Stack
                                                    direction='column'
                                                    spacing={2}
                                                >
                                                    <Box
                                                        component={Link}
                                                        href={url}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        sx={{
                                                            width: '100%',
                                                            overflow: 'hidden',
                                                            borderRadius: 1,
                                                            aspectRatio: '4 / 3',
                                                            position: 'relative',
                                                        }}
                                                    >
                                                        <Image
                                                            src={thumbnail}
                                                            alt={name}
                                                            fill
                                                            style={{
                                                                objectFit: 'cover',
                                                                userSelect: 'none',
                                                                pointerEvents: 'none',
                                                            }}
                                                        />
                                                    </Box>
                                                    <Stack
                                                        direction='column'
                                                        spacing={2}
                                                    >
                                                        <Stack
                                                            direction='row'
                                                            spacing={2}
                                                            alignItems='center'
                                                            justifyContent='space-between'
                                                        >
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '18px',
                                                                    fontWeight: 500,
                                                                    color: 'text.primary',
                                                                }}
                                                            >
                                                                {name}
                                                            </Typography>
                                                            <IconButton
                                                                size='small'
                                                                component={Link}
                                                                href={url}
                                                                target='_blank'
                                                                rel='noopener noreferrer'
                                                                sx={{
                                                                    color: 'text.secondary',
                                                                }}
                                                            >
                                                                <OpenInNewOutlined fontSize='small' />
                                                            </IconButton>
                                                        </Stack>
                                                        <Typography
                                                            variant='body2'
                                                            sx={{
                                                                color: 'text.secondary',
                                                            }}
                                                        >
                                                            {description}
                                                        </Typography>
                                                        <Divider />
                                                    </Stack>
                                                    <Stack
                                                        direction='column'
                                                        spacing={2}
                                                    >
                                                        <Stack
                                                            direction='row'
                                                            sx={{
                                                                flexWrap: 'wrap',
                                                                gap: 0.5,
                                                            }}
                                                        >
                                                            {techStack.map(({ icon, label }) => {
                                                                const Icon = icon;
                                                                return (
                                                                    <Chip
                                                                        key={label}
                                                                        icon={<Icon />}
                                                                        label={label}
                                                                        sx={{
                                                                            p: 1,
                                                                            width: 'fit-content',
                                                                        }}
                                                                    />
                                                                );
                                                            })}
                                                        </Stack>
                                                    </Stack>
                                                </Stack>
                                            </Card>
                                        </Grid>
                                    );
                                }
                            )}
                        </Grid>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

// ------------------------------------------------------------------------------------------

export default Projects;

// ------------------------------------------------------------------------------------------
