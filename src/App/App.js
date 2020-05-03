import React, { useEffect, useState } from 'react';

import { BookmarksContext, ShortcutsContext } from '../contexts';

import styles from './App.module.css';
import { Bookmarks } from './Bookmarks';
import { Logo } from './Logo';
import { Search } from './Search';
import { Settings } from './Settings';
import { Shortcuts } from './Shortcuts'

/* global chrome */

const useBookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
        chrome.bookmarks.getChildren('709', (bookmarkTreeNodes) => {
            setBookmarks(bookmarkTreeNodes);
        });
    }, []);
    return bookmarks;
};

const useShortcuts = () => {
    const [shortcuts, setShortcuts] = useState([]);
    useEffect(() => {
        setShortcuts([{
            title: 'Youtube',
            image: 'https://material-new-tab-2.web.app/youtube.svg',
            url: 'https://youtube.com'
        }, {
            title: 'Reddit',
            image: 'https://material-new-tab-2.web.app/reddit.svg',
            url: 'https://reddit.com'
        }, {
            title: 'Todoist',
            image: 'https://material-new-tab-2.web.app/todoist.png',
            url: 'https://beta.todoist.com/app'
        }, {
            title: 'Gmail',
            image: 'https://material-new-tab-2.web.app/gmail.svg',
            url: 'https://mail.google.com'
        }, {
            title: 'Keep',
            image: 'https://material-new-tab-2.web.app/keep.svg',
            url: 'https://keep.google.com'
        }, {
            title: 'Feedly',
            image: 'https://material-new-tab-2.web.app/feedly.svg',
            url: 'https://feedly.com'
        }, {
            title: 'Hangouts',
            image: 'https://material-new-tab-2.web.app/hangouts.svg',
            url: 'https://hangouts.google.com'
        }, {
            title: 'Chat',
            image: 'https://material-new-tab-2.web.app/chat.svg',
            url: 'https://chat.google.com'
        },{
            title: 'Meet',
            image: 'https://material-new-tab-2.web.app/meet.svg',
            url: 'https://meet.google.com'
        }, {
            title: 'Drive',
            image: 'https://material-new-tab-2.web.app/drive.svg',
            url: 'https://drive.google.com'
        }, {
            title: 'Tasks',
            image: 'https://material-new-tab-2.web.app/tasks.svg',
            url: 'https://tasks.google.com/embed/list/~default?fullWidth=1'
        }, {
            title: 'Calendar',
            image: 'https://material-new-tab-2.web.app/calendar.png',
            url: 'https://calendar.google.com'
        }, {
            title: 'News',
            image: 'https://material-new-tab-2.web.app/news.svg',
            url: 'https://news.google.com'
        }, {
            title: 'Photos',
            image: 'https://material-new-tab-2.web.app/photos.svg',
            url: 'https://photos.google.com'
        }]);
    }, []);
    return shortcuts;
}

export const App = () => {
    const bookmarks = useBookmarks();
    const shortcuts = useShortcuts();
    return (
        <BookmarksContext.Provider value={bookmarks}>
            <ShortcutsContext.Provider value={shortcuts}>
                <div className={styles.App}>
                    <Settings className={styles.Settings}/>
                    <Logo className={styles.Logo}/>
                    <Search className={styles.Search}/>
                    <Shortcuts className={styles.Shortcuts}/>
                    <Bookmarks className={styles.Bookmarks}/>
                </div>
            </ShortcutsContext.Provider>
        </BookmarksContext.Provider>
    );
};
