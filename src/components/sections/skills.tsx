// ------------------------------------------------------------------------------------------

import Link from 'next/link';
import { FC, JSX } from 'react';
import { IconType } from 'react-icons';
import {
    SiCss3, SiDocker, SiExpress, SiGit, SiHtml5, SiJavascript, SiJsonwebtokens, SiMongodb, SiMui,
    SiMysql, SiN8N, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSass, SiShadcnui,
    SiTailwindcss, SiThreedotjs, SiTypescript
} from 'react-icons/si';

import sectionIds from '@/constants/sectionIds';
import { OpenInNewOutlined } from '@mui/icons-material';
import { Box, Card, Chip, Container, Grid, IconButton, Stack, Typography } from '@mui/material';

// ------------------------------------------------------------------------------------------

interface TechItem {
    name: string;
    icon: IconType;
    link: string;
    description: string;
    areas: string[];
}

// ------------------------------------------------------------------------------------------

const techStack: TechItem[] = [
    {
        name: 'HTML',
        icon: SiHtml5,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        description: 'Standard markup language for structuring web content.',
        areas: ['Frontend'],
    },
    {
        name: 'CSS',
        icon: SiCss3,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        description: 'Stylesheet language for designing and formatting web pages.',
        areas: ['Frontend'],
    },
    {
        name: 'SCSS',
        icon: SiSass,
        link: 'https://sass-lang.com/',
        description: 'CSS preprocessor that adds variables, nesting, and modularity.',
        areas: ['Frontend'],
    },
    {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        link: 'https://tailwindcss.com/',
        description: 'Utility-first CSS framework for rapidly building custom user interfaces.',
        areas: ['Frontend', 'Styling'],
    },
    {
        name: 'JavaScript',
        icon: SiJavascript,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        description: 'Programming language for dynamic and interactive web functionality.',
        areas: ['Frontend', 'Backend'],
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        link: 'https://www.typescriptlang.org/',
        description: 'Typed superset of JavaScript that enhances code safety and scalability.',
        areas: ['Frontend', 'Backend'],
    },
    {
        name: 'React.js',
        icon: SiReact,
        link: 'https://reactjs.org/',
        description: 'Library for building component-based user interfaces.',
        areas: ['Frontend'],
    },
    {
        name: 'Next.js',
        icon: SiNextdotjs,
        link: 'https://nextjs.org/',
        description: 'React framework for server-side rendering and static site generation.',
        areas: ['Fullstack'],
    },
    {
        name: 'Three.js',
        icon: SiThreedotjs,
        link: 'https://threejs.org/',
        description: 'JavaScript library for creating and rendering 3D graphics in the browser.',
        areas: ['Frontend'],
    },
    {
        name: 'Node.js',
        icon: SiNodedotjs,
        link: 'https://nodejs.org/',
        description: 'Runtime environment for executing JavaScript on the server side.',
        areas: ['Backend'],
    },
    {
        name: 'Express.js',
        icon: SiExpress,
        link: 'https://expressjs.com/',
        description: 'Minimalist web framework for building server-side applications.',
        areas: ['Backend'],
    },
    {
        name: 'Nest.js',
        icon: SiNestjs,
        link: 'https://nestjs.com/',
        description: 'Progressive framework for building scalable server-side applications.',
        areas: ['Backend'],
    },
    {
        name: 'MongoDB',
        icon: SiMongodb,
        link: 'https://www.mongodb.com/',
        description: 'NoSQL database for storing data in flexible document structures.',
        areas: ['Database'],
    },
    {
        name: 'MySQL',
        icon: SiMysql,
        link: 'https://www.mysql.com/',
        description: 'Relational database management system with structured data storage.',
        areas: ['Database'],
    },
    {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        link: 'https://www.postgresql.org/',
        description: 'Advanced open-source relational database with strong SQL support.',
        areas: ['Database'],
    },
    {
        name: 'JWT',
        icon: SiJsonwebtokens,
        link: 'https://jwt.io/',
        description: 'Compact and secure format for transmitting authentication data.',
        areas: ['Security', 'Authentication'],
    },
    {
        name: 'Git',
        icon: SiGit,
        link: 'https://git-scm.com/',
        description: 'Distributed version control system for source code management.',
        areas: ['Version Control', 'Collaboration'],
    },
    {
        name: 'Shadcn/ui',
        icon: SiShadcnui,
        link: 'https://ui.shadcn.com/',
        description:
            'Beautifully designed, accessible components built with Radix UI and Tailwind CSS. Copy-paste ready, fully customizable.',
        areas: ['Frontend', 'UI Components'],
    },
    {
        name: 'Material UI',
        icon: SiMui,
        link: 'https://mui.com/material-ui/',
        description:
            "Comprehensive React component library implementing Google's Material Design with excellent customization and accessibility.",
        areas: ['Frontend', 'UI Components'],
    },
    {
        name: 'Docker',
        icon: SiDocker,
        link: 'https://www.docker.com/',
        description: 'Platform for developing, shipping, and running applications in containers.',
        areas: ['DevOps', 'Deployment'],
    },
    {
        name: 'n8n',
        icon: SiN8N,
        link: 'https://n8n.io/',
        description:
            'Powerful open-source workflow automation tool with node-based visual programming.',
        areas: ['Automation', 'Backend', 'Integrations'],
    },
];

// ------------------------------------------------------------------------------------------

const Skills: FC = (): JSX.Element => {
    return (
        <Box
            component='section'
            id={sectionIds.skills}
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
                        Skills
                    </Typography>
                    <Stack
                        direction='column'
                        spacing={{ xs: 2, sm: 3 }}
                    >
                        <Grid
                            container
                            spacing={{ xs: 2, sm: 3 }}
                        >
                            {techStack.map(({ name, icon, link, description, areas }) => {
                                const Icon = icon;

                                return (
                                    <Grid
                                        key={name}
                                        size={{ xs: 12, sm: 6, md: 4 }}
                                    >
                                        <Card
                                            elevation={0}
                                            sx={{
                                                borderRadius: 4,
                                                p: { xs: 2, sm: 3 },
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        >
                                            <Stack
                                                direction='column'
                                                spacing={2}
                                            >
                                                <Stack
                                                    direction='row'
                                                    alignItems='center'
                                                    justifyContent='space-between'
                                                    spacing={2}
                                                >
                                                    <Stack
                                                        direction='row'
                                                        alignItems='center'
                                                        spacing={2}
                                                        sx={{
                                                            color: 'text.secondary',
                                                        }}
                                                    >
                                                        <Icon size={32} />
                                                        <Typography
                                                            variant='body1'
                                                            sx={{
                                                                fontSize: '18px',
                                                                fontWeight: 500,
                                                                color: 'text.primary',
                                                            }}
                                                        >
                                                            {name}
                                                        </Typography>
                                                    </Stack>
                                                    <IconButton
                                                        size='small'
                                                        component={Link}
                                                        href={link}
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
                                                <Stack
                                                    direction='row'
                                                    spacing={0.5}
                                                >
                                                    {areas.map((area) => {
                                                        return (
                                                            <Chip
                                                                key={area}
                                                                label={area}
                                                                size='small'
                                                            />
                                                        );
                                                    })}
                                                </Stack>
                                            </Stack>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

// ------------------------------------------------------------------------------------------

export default Skills;

// ------------------------------------------------------------------------------------------
