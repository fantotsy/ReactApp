import * as TODOS_TYPES from '../types/todos';

const initialState = {
    data: [],
    inputValue: '',
}

let counter = 0;

export default (state = initialState, action) => {
    switch(action.type) {
        case TODOS_TYPES.ADD_TODO:
            return {
                ...state,
                data: [
                    { id: counter++, text: state.inputValue },
                    ...state.data
                ],
                inputValue: '',
            };
        case TODOS_TYPES.SET_TODO_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.value,
            };
        default:
            return state;
    }
}