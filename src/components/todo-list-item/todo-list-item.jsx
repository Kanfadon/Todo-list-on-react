import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({id, text, important, complete, onImportant, onDelete, onComplete}) => {
    const importantClass = important ? " text-danger" : "";

    return (
        <div className="row mt-2">
            <div className="col-sm-8 offset-sm-1">
                <h5 
                type="button" 
                className={"text-center text-break"+importantClass}
                onClick={() => onComplete(id)}
                >{complete ? <s>{text}</s> : text}</h5>
            </div>
            <div className="col-sm-3 d-flex justify-content-sm-around justify-content-between align-items-start">
                <button 
                className="btn btn-width btn-outline-primary" 
                type="button"
                onClick={() => onImportant(id)}
                >
                    <i className="fa fa-exclamation" />
                </button>
                <button 
                className="btn btn-width btn-outline-danger" 
                type="button"
                onClick={() => onDelete(id)}
                >
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        </div>
    )
}

export default TodoListItem;