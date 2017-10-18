import * as React from 'react';

import { TodoItem } from './TodoItem';

interface TodoItem {
    id: number;
    name: string;
    isComplete: boolean;
}

interface TodoListProps {
    todos: TodoItem[];
}

export const TodoList = (props: TodoListProps) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    </div>
);