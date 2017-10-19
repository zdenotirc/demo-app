import { addTodo } from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
    const startTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: false },
    ];

    const newTodo = { id: 3, name: 'Three', isComplete: false };

    const expected = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: false },
        { id: 3, name: 'Three', isComplete: false }
    ];

    const result = addTodo(startTodo, newTodo);

    expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo array', () => {
    const startTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: false },
    ];

    const newTodo = { id: 3, name: 'Three', isComplete: false };

    const result = addTodo(startTodo, newTodo);

    expect(result).not.toBe(startTodo);
});