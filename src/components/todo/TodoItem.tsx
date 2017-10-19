import * as React from 'react';
import { TodoItemModel } from '../../models/TodoItem';

export const TodoItem: React.StatelessComponent<TodoItemModel> = ({ name, isComplete }) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} />
        {name}
    </li>
);