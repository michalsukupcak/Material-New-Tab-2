import React, {useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import {FolderList} from './FolderList/FolderList';

/* global chrome */

const useTopLevelBookmarks = () => {
    const [topLevelBookmarks, setTopLevelBookmarks] = useState(null);
    useEffect(() => chrome.bookmarks.getTree((bookmarkTreeNodeList) => {
        setTopLevelBookmarks(bookmarkTreeNodeList[0].children);
    }), []);
    return topLevelBookmarks;
};

export const CustomizeDialog = ({ open, onClose }) => {
    const topLevelBookmarks = useTopLevelBookmarks();
    console.log(topLevelBookmarks);
    return (
        <div>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Customize Bookmarks</DialogTitle>
                <DialogContent>
                    <div>Select folders to use as bookmarks:</div>
                    <div>{topLevelBookmarks?.map((topLevelBookmark) => <FolderList bookmarkTreeNode={topLevelBookmark} level={0}/>)}</div>
                    <div>Reorder selected folders:</div>
                    <div></div>
                    <div>Color customization:</div>
                    <div></div>
                </DialogContent>
                <DialogActions>
                    <Button>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
