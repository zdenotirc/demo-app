import * as React from 'react';

interface TodoAddProps {
    handleInput: (e: React.FormEvent<HTMLInputElement>) => void;

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

    currentTodo: string;
}

export const TodoAdd: React.StatelessComponent<TodoAddProps> = ({ handleInput, handleSubmit, currentTodo }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInput} value={currentTodo} />
            </form>
        </div>
    );
};