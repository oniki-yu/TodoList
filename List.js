import React from 'react';

export const List = (props) => {
    const taskList = props.tasks.map((value, key) => {
        return (
            <li key={key}>
                {value}
            </li>
        );
    });
    return (
        <ul>
            {taskList}
        </ul>
    )
};

List.defaultProps = { tasks: [] };