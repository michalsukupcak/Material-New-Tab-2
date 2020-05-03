import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';

import { classNames } from '../../utils';
import { CustomizeButton } from '../../components';

import styles from './Bookmarks.module.css';
import {Folder} from './Folder';
import {CustomizeDialog} from './CustomizeDialog/CustomizeDialog';

export const Bookmarks = ({ className }) => {
    const [isCustomizeDialogOpened, setIsCustomizeDialogOpened] = useState(false);

    const folderIds = [ '709', '734' ,'738', '735', '740', '569', '205' ];
    const openCustomizeDialog = () => setIsCustomizeDialogOpened(true);
    const closeCustomizeDialog = () => setIsCustomizeDialogOpened(false);

    return (
        <div className={classNames(styles.Bookmarks, className)}>

            {/* Header */}
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.title}>Bookmarks</div>
                </div>
                <div className={styles.right}>
                    <CustomizeButton startIcon={<EditIcon/>} onClick={openCustomizeDialog}>
                        Customize
                    </CustomizeButton>
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                {folderIds.map((folderId) => (<Folder folderId={folderId} className={styles.Folder}/>))}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <Button startIcon={<AddIcon/>}>
                    Add Folder
                </Button>
            </div>

            {/* Customization dialog */}
            <CustomizeDialog open={isCustomizeDialogOpened} onClose={closeCustomizeDialog}/>

        </div>
    );
};
