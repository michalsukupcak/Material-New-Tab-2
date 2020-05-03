import React from 'react';

import { classNames } from '../../../../utils';

import styles from './Bookmark.module.css';

export const Bookmark = ({ title, url, className }) => {
    return (
        <a href={url} className={classNames(styles.Bookmark, className)}>
            <img className={styles.image} src={`chrome://favicon/${url}`}/>
            <div className={styles.name}>
                {title}
            </div>
        </a>
    );
};

