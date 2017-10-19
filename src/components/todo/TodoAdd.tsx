import * as React from 'react';

interface TodoAddProps {
    handleInput: (e: React.FormEvent<HTMLInputElement>) => void;

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

    currentTodo: string;
}

export const TodoAdd = (props: TodoAddProps) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleInput} value={props.currentTodo} />
            </form>
        </div>
    );
};