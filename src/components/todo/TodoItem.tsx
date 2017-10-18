import * as React from 'react';

interface TodoItem {
    id: number;
    name: string;
    isComplete: boolean;
}

export const TodoItem = (props: TodoItem) => (
    <div>
        <li>
            <input type="checkbox" defaultChecked={props.isComplete} />
            {props.name}
        </li>
        <p>test</p>
    </div>
);