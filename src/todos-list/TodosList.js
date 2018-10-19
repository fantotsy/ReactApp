import React from 'react';

export default class TodosList extends React.Component {
    renderTodo = (todo) => (
        <li key={todo.id}>
            {todo.text}
            <button onClick={this.props.onRemoveTodoClick(todo.id)}>X</button>
        </li>
    );

    render() {
        const {
            inputValue,
            todos,
            onAddTodoClick,
            onNewTodoInputChange,
        } = this.props;

        return (
            <React.Fragment>
                <input
                    value={inputValue}
                    type="text"
                    onChange={(event) => onNewTodoInputChange(event.target.value)}
                />
                <button onClick={onAddTodoClick}>Add todo</button>
                <ul>{todos.map(this.renderTodo)}</ul>
            </React.Fragment>
        )
    }
}