import React from 'react';
import TodoListItem from './../todo-list-item';
import './todo-list.css';

const TodoList = ({itemList, onImportant, onDelete, onComplete}) => {

    const items = itemList.map(({id, text, important, complete}) => {
        return (
            <div key={id}>
                <TodoListItem  id={id} text={text} important={important} complete={complete} onImportant={onImportant} onComplete={onComplete} onDelete={onDelete} />
                <hr className="mt-2 col-sm-10 offset--sm-1" />
            </div>
        )
    });

    return (
        <div className="row mt-3 max-height d-flex flex-column flex-nowrap">
            {items}
        </div>
    )
}

export default TodoList;