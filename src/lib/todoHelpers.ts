import { TodoItemModel } from '../models/TodoItem';

export const addTodo = (list: TodoItemModel[], item: TodoItemModel) => {
    return [...list, item];
};

export const generateId = () => Math.floor(Math.random() * 100000);

export const findById = (id: number, list: TodoItemModel[]) => {
    const item = list.find(i => i.id === id);

    return item;
};

export const toggleTodo = (item: TodoItemModel) => {
    return {
        ...item,
        isComplete: !item.isComplete
    };
};

export const updateTodo = (list: TodoItemModel[], item: TodoItemModel) => {
    return list.map((i) => {
        if (i.id === item.id) {
            i = item;
        }

        return i;
    });
};