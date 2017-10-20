import * as React from 'react';

import { TodoItem } from './TodoItem';
import { TodoItemModel } from '../../models/TodoItem';

interface TodoListProps {
    todos: TodoItemModel[];

    handleToggle: (id: number) => void;
}

export const TodoList: React.StatelessComponent<TodoListProps> = ({ todos, handleToggle }) => {
    return (
        <div className="Todo-List">
            <ul>
                {
                    todos.map(todo =>
                        <TodoItem
                            key={todo.id}
                            todoItemModel={todo}
                            handleToggle={handleToggle}
                        />)
                }
            </ul>
        </div>
    );
};

TodoList.displayName = 'TodoList';