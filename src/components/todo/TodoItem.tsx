import * as React from 'react';
import { TodoItemModel } from '../../models/TodoItem';

interface TodoItemProps {
    todoItemModel: TodoItemModel;
    handleToggle: (id: number) => void;
}

export const TodoItem: React.StatelessComponent<TodoItemProps> = ({ handleToggle, todoItemModel: { id, name, isComplete } }) => {
    return (
        <li>
            <input type="checkbox" onChange={() => handleToggle(id)} checked={isComplete} />
            {name}
        </li>
    )
};