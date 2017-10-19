import * as React from 'react';

interface TodoAddProps {
    handleInput: (e: React.FormEvent<HTMLInputElement>) => void;

    currentTodo: string;
}

export const TodoAdd = (props: TodoAddProps) => {
    return (
        <div>
            <form>
                <input type="text" onChange={props.handleInput} value={props.currentTodo} />
            </form>
        </div>
    );
};