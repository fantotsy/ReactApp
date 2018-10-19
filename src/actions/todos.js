import * as TODOS_TYPES from '../types/todos';

export const addTodo = () => ({
    type: TODOS_TYPES.ADD_TODO,
});

export const setTodoInputValue = (value) => ({
    type: TODOS_TYPES.SET_TODO_INPUT_VALUE,
    value,
});