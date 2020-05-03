import React from 'react';

import { classNames } from '../../../utils';

import styles from './Shortcut.module.css';

export const Shortcut = ({ title, image, url, className }) => {
    return (
        <a href={url} className={classNames(styles.Shortcut, className)}>
            <div className={styles.icon}>
                <img className={styles.image} src={image}/>
            </div>
            <div className={styles.title}>
                {title}
            </div>
        </a>
    );
};

