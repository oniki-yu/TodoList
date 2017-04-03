import React from 'react';

export const ListItems = (props) => {
    return (
        <li id={props.id}>
            {props.value}
            <button className="square" onClick={() => props.onClick(props.id)}>
                削除
            </button>
        </li>
    )
};

ListItems.defaultProps = { value: null, key: null };

