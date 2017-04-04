import React from 'react';

import ContainerListItems from './ListItems';

export const List = (props) => {
    const taskList = props.tasks.map((value, key) => {
        return (
            <ContainerListItems value={value.text} favorite={value.favorite} id={key} key={key} onClick={e => props.onClick(e)} favoritesFunction={e => props.favoritesFunction(e)} />
        );
    });
    return (
        <ul>
            {taskList}
        </ul>
    );
};

List.defaultProps = { tasks: [] };