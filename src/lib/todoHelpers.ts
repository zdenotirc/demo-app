interface TodoItem {
    id: number;
    name: string;
    isComplete: boolean;
}

export const addTodo = (list: TodoItem[], item: TodoItem) => {
    return [...list, item];
    // return list.concat(item);
};

/*
export const addTodo = (list: TodoItem[], item: TodoItem) => {
    // mutates existing list
    list.push(item);
    return list;
};*/

export const generateId = () => Math.floor(Math.random() * 100000);