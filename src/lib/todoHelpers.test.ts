import { addTodo, findById, toggleTodo, updateTodo, removeTodo } from './todoHelpers';

describe('addTodo', () => {
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

    test('should add the passed todo to the list', () => {
        const actual = addTodo(startTodo, newTodo);

        expect(actual).toEqual(expected);
    });

    test('should not mutate the existing todo array', () => {
        const actual = addTodo(startTodo, newTodo);

        expect(actual).not.toBe(startTodo);
    });
});
describe('findById', () => {
    test('should return the expected item from an array', () => {
        const startTodo = [
            { id: 1, name: 'One', isComplete: false },
            { id: 2, name: 'Two', isComplete: false },
            { id: 3, name: 'Three', isComplete: false }
        ];

        const expected = { id: 2, name: 'Two', isComplete: false };
        const actual = findById(2, startTodo);

        expect(actual).toEqual(expected);
    });
});

describe('toggleTodo', () => {
    const startTodo = { id: 1, name: 'One', isComplete: false };
    const expected = { id: 1, name: 'One', isComplete: true };

    test('should toggle isComplete prop of a todo', () => {
        const actual = toggleTodo(startTodo);
        expect(actual).toEqual(expected);
    });

    test('should not mutate original todo', () => {
        const actual = toggleTodo(startTodo);
        expect(actual).not.toBe(startTodo);
    });
});

describe('updateTodo', () => {
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

    test('should update an item by id', () => {
        const actual = updateTodo(startTodo, updatedTodo);

        expect(actual).toEqual(expectedTodo);
    });

    test('should not mutate original array', () => {
        const actual = updateTodo(startTodo, updatedTodo);

        expect(actual).not.toBe(startTodo);
    });
});

describe('removeTodo', () => {
    const startTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 2, name: 'Two', isComplete: false },
        { id: 3, name: 'Three', isComplete: false }
    ];

    const removedId = 2;

    const expectedTodo = [
        { id: 1, name: 'One', isComplete: false },
        { id: 3, name: 'Three', isComplete: false }
    ];

    test('should remove an item from the array', () => {
        const actual = removeTodo(startTodo, removedId);

        expect(actual).toEqual(expectedTodo);
    });

    test('should not mutate original array', () => {
        const actual = removeTodo(startTodo, removedId);

        expect(actual).not.toBe(startTodo);
    });
});