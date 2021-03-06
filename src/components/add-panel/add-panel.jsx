import React from 'react';

const AddPanel = ({addItem}) => {
    return (
        <div className="input-group min-height">
            <input className="form-control" type="text"/>
            <button className="input-group-append btn btn-primary"
            onClick={addItem}
            >Добавить</button>
        </div>
    )
}

export default AddPanel;