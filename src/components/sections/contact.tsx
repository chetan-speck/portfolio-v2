// ------------------------------------------------------------------------------------------

'use client';

// ------------------------------------------------------------------------------------------

import { FC, JSX, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

import contactInfo from '@/constants/contactInfo';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContentCopy, GitHub, LinkedIn, MailOutline, PhoneOutlined } from '@mui/icons-material';
import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';

// ------------------------------------------------------------------------------------------

const schema = yup.object({
    name: yup.string().required('Your name is required').min(2).max(50),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    message: yup.string().required('Message is required').min(10).max(500),
});

type ContactFormValues = yup.InferType<typeof schema>;

// ------------------------------------------------------------------------------------------

const Contact: FC = (): JSX.Element => {
    const [copied, setCopied] = useState<string | null>(null);
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isValid },
    } = useForm<ContactFormValues>({ resolver: yupResolver(schema), mode: 'onTouched' });

    const onSubmit = (data: ContactFormValues) => {
        if (!isValid || isSubmitting) return;

        const subject = encodeURIComponent(`New contact request from ${data.name}`);

        const body = encodeURIComponent(
            `Hello,\n\nYou have received a new contact request from your portfolio website:\n\n` +
                `Name: ${data.name}\n` +
                `Email: ${data.email}\n\n` +
                `Message:\n${data.message}\n\n` +
                `---\nThis message was sent via the portfolio contact form.`
        );

        window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    };

    const handleCopy = (text: string, type: string) => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    setCopied(type);
                    setTimeout(() => setCopied(null), 2000);
                })
                .catch((err) => {
                    console.error('Failed to copy: ', err);
                });
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            setCopied(type);
            setTimeout(() => setCopied(null), 2000);
        }
    };

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
                <Grid
                    container
                    spacing={{ xs: 4, sm: 6 }}
                >
                    <Grid size={{ xs: 12, sm: 7 }}>
                        <Stack
                            spacing={{ xs: 2, sm: 3 }}
                            direction='column'
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
                                Let&#39;s talk for <br /> something special
                            </Typography>
                            <Typography
                                variant='body2'
                                sx={{
                                    color: 'text.secondary',
                                }}
                            >
                                I work to expand creativity by creating engaging, user-friendly, and
                                memorable experiences. Let&#39;s connect and create something
                                meaningful together.
                            </Typography>
                            <Stack
                                direction='row'
                                sx={{
                                    flexWrap: 'wrap',
                                    gap: 0.5,
                                }}
                            >
                                <Chip
                                    icon={<MailOutline />}
                                    label={contactInfo.email}
                                    size='medium'
                                    onDelete={() => handleCopy(contactInfo.email, 'email')}
                                    deleteIcon={
                                        <Tooltip title={copied === 'email' ? 'Copied' : 'Copy'}>
                                            <IconButton size='small'>
                                                <ContentCopy fontSize='small' />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                    sx={{ height: '40px', pl: 0.5, borderRadius: 5 }}
                                />
                                <Chip
                                    icon={<PhoneOutlined />}
                                    label={contactInfo.phone}
                                    size='medium'
                                    onDelete={() => handleCopy(contactInfo.phone, 'phone')}
                                    deleteIcon={
                                        <Tooltip title={copied === 'phone' ? 'Copied' : 'Copy'}>
                                            <IconButton size='small'>
                                                <ContentCopy fontSize='small' />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                    sx={{ height: '40px', pl: 0.5, borderRadius: 5 }}
                                />
                                <Chip
                                    icon={<GitHub />}
                                    label='GitHub'
                                    deleteIcon={
                                        <Tooltip title={copied === 'github' ? 'Copied' : 'Copy'}>
                                            <IconButton
                                                size='small'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleCopy(contactInfo.github, 'github');
                                                }}
                                            >
                                                <ContentCopy fontSize='small' />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                    onDelete={() => handleCopy(contactInfo.github, 'github')}
                                    sx={{ height: '40px', pl: 0.5, borderRadius: 5 }}
                                />
                                <Chip
                                    icon={<LinkedIn />}
                                    label='LinkedIn'
                                    deleteIcon={
                                        <Tooltip title={copied === 'linkedin' ? 'Copied' : 'Copy'}>
                                            <IconButton
                                                size='small'
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleCopy(contactInfo.linkedin, 'linkedin');
                                                }}
                                            >
                                                <ContentCopy fontSize='small' />
                                            </IconButton>
                                        </Tooltip>
                                    }
                                    onDelete={() => handleCopy(contactInfo.linkedin, 'linkedin')}
                                    sx={{ height: '40px', pl: 0.5, borderRadius: 5 }}
                                />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 5 }}>
                        <Box
                            component='form'
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                        >
                            <Stack spacing={2}>
                                <Controller
                                    name='name'
                                    control={control}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label='Your name'
                                            type='text'
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            required
                                            slotProps={{
                                                input: {
                                                    sx: { borderRadius: 2 },
                                                },
                                                htmlInput: {
                                                    minLength: 2,
                                                    maxLength: 50,
                                                    autoComplete: 'name',
                                                },
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    name='email'
                                    control={control}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label='Email'
                                            type='email'
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            required
                                            slotProps={{
                                                input: {
                                                    sx: { borderRadius: 2 },
                                                },
                                                htmlInput: {
                                                    maxLength: 100,
                                                    autoComplete: 'email',
                                                },
                                            }}
                                        />
                                    )}
                                />
                                <Controller
                                    name='message'
                                    control={control}
                                    defaultValue=''
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label='Message'
                                            type='text'
                                            multiline
                                            rows={4}
                                            error={!!errors.message}
                                            helperText={errors.message?.message}
                                            required
                                            slotProps={{
                                                input: {
                                                    sx: { borderRadius: 2 },
                                                },
                                                htmlInput: {
                                                    minLength: 10,
                                                    maxLength: 500,
                                                },
                                            }}
                                        />
                                    )}
                                />
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    size='large'
                                    sx={{ borderRadius: 8, textTransform: 'unset' }}
                                >
                                    {isSubmitting ? 'Sending…' : 'Get in touch'}
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

// ------------------------------------------------------------------------------------------

export default Contact;

// ------------------------------------------------------------------------------------------
