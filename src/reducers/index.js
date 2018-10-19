import { combineReducers } from 'redux';
import albums from './albums';
import todos from './todos';

export default combineReducers({
    albums,
    todos,
})