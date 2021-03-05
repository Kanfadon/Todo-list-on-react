import React from 'react';
import TodoListItem from './../todo-list-item';

const TodoList = () => {
    return (
        <div className="row mt-3">
            <TodoListItem text="Супер длиииииииииииииииииииииииииинное и ваааааааааааажное дело" />
            <hr className="mt-2 col--sm10 offset--sm-1" />
            <TodoListItem text="купить хлеб" />
            <hr className="mt-2 col--sm10 offset--sm-1" />
            <TodoListItem text="прочитать книгу" />
            <hr className="mt-2 col--sm10 offset--sm-1" />
            <TodoListItem text="вынести мусор" />
            <hr className="mt-2 col--sm10 offset--sm-1" />
        </div>
    )
}

export default TodoList;