import React, {useContext, useEffect, useState} from 'react';

import { BookmarksContext } from '../../../contexts';
import { classNames } from '../../../utils';

import { Bookmark } from './Bookmark';
import styles from './Folder.module.css';
import {Bookmark2} from './Bookmark2';

const useFolder = (folderId) => {
    const [folder, setFolder] = useState({
        title: null,
        bookmarks: []
    });
    useEffect(() => {
        chrome.bookmarks.get(folderId, (bookmarkTreeNodes) => {
            const title = bookmarkTreeNodes[0].title;
            chrome.bookmarks.getChildren(folderId, (bookmarkTreeNodes) => {
                setFolder({
                    title: title,
                    bookmarks: bookmarkTreeNodes
                });
            })
        });
    }, []);
    return folder;
};

/* global chrome */
export const Folder = ({ folderId, className }) => {
    const folder = useFolder(folderId);
    return (
        <div className={classNames(styles.Folder, className)}>
            <div className={styles.title}>{folder.title}</div>
            <div className={styles.bookmarks}>
                {folder.bookmarks.map((bookmark) => <Bookmark className={styles.Bookmark} title={bookmark.title} url={bookmark.url}/>)}
                {/*{folder.bookmarks.map((bookmark) => <Bookmark2 className={styles.Bookmark} title={bookmark.title} url={bookmark.url}/>)}*/}
            </div>
        </div>
    );
};
