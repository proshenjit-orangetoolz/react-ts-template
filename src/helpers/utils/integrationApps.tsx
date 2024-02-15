import { FacebookIcon, LinkedInIcon, PostMarkAppIcon } from 'convertupleads-theme';

export const integrationAppData = [
    {
        icon: <FacebookIcon sx={{ fontSize: '40px' }} />,
        title: 'Facebook',
        description: 'ConvertupLeads will receive your name and profile picture.',
        form: ['2', '3', '4'],
        connected: false,
    },
    {
        icon: <LinkedInIcon sx={{ fontSize: '40px' }} />,
        title: 'LinkedIn',
        description: 'ConvertupLeads will receive your name and profile picture.',
        form: ['2', '3', '4'],
        connected: true,
    },
    {
        icon: <PostMarkAppIcon sx={{ fontSize: '40px' }} />,
        title: 'PostMark',
        description: 'ConvertupLeads will receive your name and profile picture.',
        form: ['1', '4'],
        connected: false,
    },
];
