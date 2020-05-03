import React from 'react';

import { classNames } from '../../utils';

import styles from './Logo.module.css';
import logo from './logos/google.png';

export const Logo = ({ className }) => {
    return (
        <div className={classNames(styles.Logo, className)}>
            <img className={styles.image} src={logo} alt={'Logo'}/>
            <div className={styles.tagline}>Material New Tab 2</div>
        </div>
    );
};
