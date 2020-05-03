import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/EditOutlined';

import styles from './CustomizeButton.module.css';

export const CustomizeButton = ({ onClick }) =>
    <div className={styles.CustomizeButton} onClick={onClick}>
        <Button className={styles.Button} startIcon={<EditIcon/>}>Customize</Button>
    </div>;
