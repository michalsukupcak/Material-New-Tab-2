import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { CustomizeButton } from '../../components';
import { ShortcutsContext } from '../../contexts';
import { classNames } from '../../utils/';

import { CustomizeDialog } from './CustomizeDialog';
import { Shortcut } from './Shortcut';
import styles from './Shortcuts.module.css';

export const Shortcuts = ({ className }) => {
    const [isCustomizeDialogOpened, setIsCustomizeDialogOpened] = useState(false);
    const shortcuts = useContext(ShortcutsContext);

    const openCustomizeDialog = () => setIsCustomizeDialogOpened(true);
    const closeCustomizeDialog = () => setIsCustomizeDialogOpened(false);

    return (
        <div className={classNames(styles.Shortcuts, className)}>

            {/* Header */}
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.title}>Apps</div>
                </div>
                <div className={styles.right}>
                    <CustomizeButton startIcon={<EditIcon/>} onClick={openCustomizeDialog}>
                        Customize
                    </CustomizeButton>
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                {shortcuts.map((shortcut) => <Shortcut className={styles.Shortcut} title={shortcut.title} image={shortcut.image} url={shortcut.url}/>)}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <Button className={styles.Button} startIcon={<ExpandMoreIcon/>}>
                    Show more
                </Button>
            </div>

            {/* Customization dialog */}
            <CustomizeDialog open={isCustomizeDialogOpened} onClose={closeCustomizeDialog}/>

        </div>
    );
};
