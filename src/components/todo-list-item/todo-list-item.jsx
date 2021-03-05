import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({text}) => {
    return (
        <div className="row mt-2">
            <div className="col-sm-8 offset-sm-1">
                <h5 className="text-center text-break">{text}</h5>
            </div>
            <div className="col-sm-3 d-flex justify-content-sm-around justify-content-between align-items-start">
                <button 
                className="btn btn-width btn-outline-primary" 
                type="button">
                    <i className="fa fa-exclamation" />
                </button>
                <button 
                className="btn btn-width btn-outline-danger" 
                type="button">
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;