import * as React from 'react';

import { TodoItem } from './TodoItem';
import { TodoItemModel } from '../../models/TodoItem';

interface TodoListProps {
    todos: TodoItemModel[];
}

export const TodoList: React.StatelessComponent<TodoListProps> = ({ todos }) => {
    return (
        <div className="Todo-List">
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </div>
    );
};

TodoList.displayName = 'TodoList';