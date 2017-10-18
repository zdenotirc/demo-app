import * as React from 'react';

interface TodoFormProps {
    handleInput: (e: React.FormEvent<HTMLInputElement>) => void;

    currentTodo: string;
}

export const TodoForm = (props: TodoFormProps) => {
    return (
        <div>
            <form>
                <input type="text" onChange={props.handleInput} value={props.currentTodo} />
            </form>
        </div>
    );
};