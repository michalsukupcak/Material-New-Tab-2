import React from 'react';
import {classNames} from '../../utils';
import styles from './Card.module.css';
import {CustomizeButton} from '../CustomizeButton';
import EditIcon from '@material-ui/icons/EditOutlined';

export const Card = ({ title, content, footer, className }) => {
    return (
        <div className={classNames(styles.Card, className)}>

            {/* Header */}
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.title}>{title}</div>
                </div>
                <div className={styles.right}>
                    <CustomizeButton startIcon={<EditIcon/>}>
                        Customize
                    </CustomizeButton>
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                {content}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                {footer}
            </div>

        </div>
    )
};