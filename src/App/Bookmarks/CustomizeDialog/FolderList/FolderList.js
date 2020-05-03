import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const FolderList = ({ bookmarkTreeNode, level }) => {
    return (
        <div style={{ marginLeft: `${level * 20}px`}}>
            <div>
                <FormControlLabel label={bookmarkTreeNode.title} control={<Checkbox label={bookmarkTreeNode.title}/>}/>
            </div>
            <div>
                {bookmarkTreeNode?.children.map((bookmarkTreeNodeChild) => !bookmarkTreeNodeChild.url && <FolderList bookmarkTreeNode={bookmarkTreeNodeChild} level={level + 1}/>)}
            </div>
        </div>
    )
}