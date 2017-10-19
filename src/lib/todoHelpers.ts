import { TodoItemModel } from '../models/TodoItem';

export const addTodo = (list: TodoItemModel[], item: TodoItemModel) => {
    return [...list, item];
    // return list.concat(item);
};

/*
export const addTodo = (list: TodoItemModel[], item: TodoItemModel) => {
    // mutates existing list
    list.push(item);
    return list;
};*/

export const generateId = () => Math.floor(Math.random() * 100000);