import { addTodo, findById, toggleTodo, updateTodo } from './todoHelpers';

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

    const actual = addTodo(startTodo, newTodo);

    expect(actual).toEqual(expected);
});

test('addTodo should not mutate the existing todo array', () => {
    const startTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: false },
    ];

    const newTodo = { id: 3, name: 'Three', isComplete: false };

    const actual = addTodo(startTodo, newTodo);

    expect(actual).not.toBe(startTodo);
});

test('findById should return the expected item from an array', () => {
    const startTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: false },
        { id: 3, name: 'Three', isComplete: false }
    ];

    const expected = { id: 2, name: 'Two', isComplete: false };
    const actual = findById(2, startTodo);

    expect(actual).toEqual(expected);
});

test('toggleTodo should toggle isComplete prop of a todo', () => {
    const startTodo = { id: 1, name: 'One', isComplete: false };
    const expected = { id: 1, name: 'One', isComplete: true };

    const actual = toggleTodo(startTodo);
    expect(actual).toEqual(expected);
});

test('toggleTodo should not mutate original todo', () => {
    const startTodo = { id: 1, name: 'One', isComplete: false };

    const actual = toggleTodo(startTodo);
    expect(actual).not.toBe(startTodo);
});

test('updateTodo should update an item by id', () => {
    const startTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: false },
        { id: 3, name: 'Three', isComplete: false }
    ];

    const updatedTodo = { id: 2, name: 'Two', isComplete: true }

    const expectedTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: true },
        { id: 3, name: 'Three', isComplete: false }
    ];

    const actual = updateTodo(startTodo, updatedTodo);

    expect(actual).toEqual(expectedTodo);
});

test('updateTodo should not mutate original array', () => {
    const startTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: false },
        { id: 3, name: 'Three', isComplete: false }
    ];

    const updatedTodo = { id: 2, name: 'Two', isComplete: true }

    const actual = updateTodo(startTodo, updatedTodo);

    expect(actual).not.toBe(startTodo);
});