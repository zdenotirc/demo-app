import * as React from 'react';
import { TodoItemModel } from '../../models/TodoItem';

interface TodoItemProps {
    todoItemModel: TodoItemModel;
    handleToggle: (id: number) => void;

    handleRemove: (id: number) => void;
}

export const TodoItem: React.StatelessComponent<TodoItemProps> = (props: TodoItemProps) => {
    const { handleRemove, handleToggle, todoItemModel: { id, name, isComplete } } = props;

    const btnStyle = { marginLeft: '5px' };

    return (
        <li>
            <input
                type="checkbox"
                onChange={() => handleToggle(id)}
                checked={isComplete}
            />
            {name}
            <button onClick={() => handleRemove(id)} style={btnStyle} type="submit">X</button>
        </li>
    );
};