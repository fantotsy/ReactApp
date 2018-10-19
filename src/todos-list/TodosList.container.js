import React from 'react';
import { connect } from 'react-redux';
import TodosList from './TodosList';
import * as TODOS_ACTIONS from '../actions/todos';

const mapStateToProps = (state) => ({
    todos: state.todos.data,
    inputValue: state.todos.inputValue,
});

const mapDispatchToProps = {
    onAddTodoClick: TODOS_ACTIONS.addTodo,
    onNewTodoInputChange: TODOS_ACTIONS.setTodoInputValue,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodosList);