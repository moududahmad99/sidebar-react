import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export const SidebarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: '/home'
    },
    {
        title: 'Accessibility',
        icon: <AccessibilityIcon />,
        link: '/accessibility'
    },
    {
        title: 'Audiotrack',
        icon: <AudiotrackIcon />,
        link: '/audiotrack'
    },
    {
        title: 'Contact',
        icon: <ContactPageIcon />,
        link: '/contact'
    },
    {
        title: 'Download',
        icon: <DownloadForOfflineIcon />,
        link: '/download'
    },
    {
        title: 'Settings',
        icon: <SettingsIcon />,
        link: '/settings'
    },
    {
        title: 'Mail',
        icon: <MarkunreadRoundedIcon />,
        link: '/mail'
    },
    {
        title: 'Send',
        icon: <SendRoundedIcon />,
        link: '/send'
    },
    {
        title: 'Money',
        icon: <AttachMoneyRoundedIcon />,
        link: '/money'
    },
    {
        title: 'Photos',
        icon: <AddPhotoAlternateRoundedIcon />,
        link: '/photos'
    },
    {
        title: 'Account',
        icon: <AccountCircleRoundedIcon />,
        link: '/account'
    },

]

export default SidebarData