import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import BookmarksIcon from '@material-ui/icons/BookmarksOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import ExtensionIcon from '@material-ui/icons/ExtensionOutlined';
import FlagIcon from '@material-ui/icons/FlagOutlined';
import GetAppIcon from '@material-ui/icons/GetAppOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import OpenInNewIcon from '@material-ui/icons/OpenInNewOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import StoreIcon from '@material-ui/icons/StoreOutlined';

import { classNames } from '../../utils';

import styles from './Settings.module.css';

/* global chrome */
export const Settings = ({ className }) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const getOpenMenuButton = () => document.querySelector('#openMenuButton');
    const openMenu = () => setIsMenuOpened(true);
    const closeMenu = () => setIsMenuOpened(false);
    const openMenuItem = (url) => chrome.tabs.create({ url });

    const chromeLinks = [{
        title: 'Default New Tab Page',
        icon: (<OpenInNewIcon/>),
        url: 'chrome-search://local-ntp/local-ntp.html'
    }, {
        title: 'Bookmarks',
        icon: (<BookmarksIcon/>),
        url: 'chrome://bookmarks'
    }, {
        title: 'Downloads',
        icon: (<GetAppIcon/>),
        url: 'chrome://downloads'
    }, {
        title: 'Extensions',
        icon: (<ExtensionIcon/>),
        url: 'chrome://extensions'
    }, {
        title: 'Flags',
        icon: (<FlagIcon/>),
        url: 'chrome://flags'
    }, {
        title: 'Settings',
        icon: (<SettingsIcon/>),
        url: 'chrome://settings'
    }, {
        title: 'Web Store',
        icon: (<StoreIcon/>),
        url: 'https://chrome.google.com/webstore'
    }];

    return (
        <div className={classNames(styles.Settings, className)}>

            {/* Menu toggle button */}
            <Button id={'openMenuButton'} className={styles.Button} startIcon={<SettingsIcon/>} onClick={openMenu}>
                Settings
            </Button>

            {/* Menu */}
            <Menu anchorEl={getOpenMenuButton} className={styles.Menu} open={isMenuOpened} onClose={closeMenu}>

                {/* Chrome links */}
                <div className={styles.title}>Chrome:</div>
                {chromeLinks.map(({ title, icon, url }) => (
                    <MenuItem onClick={() => openMenuItem(url)}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <Typography>{title}</Typography>
                    </MenuItem>
                ))}

                {/* Separator */}
                <div className={styles.separator}/>

                {/* Extension links */}
                <div className={styles.title}>Extension:</div>
                <MenuItem>
                    <ListItemIcon><EditIcon/></ListItemIcon>
                    <Typography>Customize</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon><InfoIcon/></ListItemIcon>
                    <Typography>About</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon><GitHubIcon/></ListItemIcon>
                    <Typography>Github</Typography>
                </MenuItem>

            </Menu>

        </div>
    );
};

