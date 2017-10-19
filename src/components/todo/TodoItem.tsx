import * as React from 'react';
import { TodoItemModel } from '../../models/TodoItem';

export const TodoItem = (props: TodoItemModel) => (
    <li>
        <input type="checkbox" defaultChecked={props.isComplete} />
        {props.name}
    </li>
);