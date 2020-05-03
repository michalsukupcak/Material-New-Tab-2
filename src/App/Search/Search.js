import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { classNames } from '../../utils';

import styles from './Search.module.css';

export const Search = ({ className }) => {
    return (
        <div className={classNames(styles.Search, className)}>
            <InputBase
                placeholder={'Search your bookmarks ...'}
                className={styles.input}
                startAdornment={
                    <InputAdornment position={'start'}>
                        <SearchIcon color={'disabled'} />
                    </InputAdornment>
                }/>
        </div>
    );
};
