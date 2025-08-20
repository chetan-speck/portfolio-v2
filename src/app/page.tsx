// ------------------------------------------------------------------------------------------

import { FC, JSX } from 'react';

import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Experience from '@/components/sections/experience';
import Landing from '@/components/sections/landing';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import { Stack } from '@mui/material';

// ------------------------------------------------------------------------------------------

const Page: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <Stack
                component='main'
                direction='column'
            >
                <Landing />
                <Skills />
                <Experience />
                <Projects />
                <About />
                <Contact />
            </Stack>
            <Footer />
        </>
    );
};

// ------------------------------------------------------------------------------------------

export default Page;

// ------------------------------------------------------------------------------------------
