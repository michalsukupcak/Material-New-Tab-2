import React from 'react';

import { classNames } from '../../../../utils';

import styles from './Bookmark2.module.css';

export const Bookmark2 = ({ title, url, className }) => {
    return (
        <a href={url} className={classNames(styles.Bookmark2, className)}>
            <img className={styles.image} src={`chrome://thumb/${url}`}/>
            <div className={styles.name}>
                {title}
            </div>
        </a>
    );
};

