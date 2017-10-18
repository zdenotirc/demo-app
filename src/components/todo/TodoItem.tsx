import * as React from 'react';

interface TodoItem {
    id: number;
    name: string;
    isComplete: boolean;
}

export const TodoItem = (props: TodoItem) => (
    <li>
        <input type="checkbox" defaultChecked={props.isComplete} />
        {props.name}
    </li>
);