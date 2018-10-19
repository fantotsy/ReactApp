import * as ALBUM_TYPES from '../types/albums';

const initialState = {
    data: [],
    isLoading: null,
    error: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ALBUM_TYPES.REQUEST_ALBUMS_INIT:
            return {
                ...state,
                isLoading: true,
                error: false,
            };
        case ALBUM_TYPES.REQUEST_ALBUMS_SUCCESS:
            return {
                ...state,
                data: action.data,
                isLoading: false,
            };
        case ALBUM_TYPES.REQUEST_ALBUMS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state
    }
}