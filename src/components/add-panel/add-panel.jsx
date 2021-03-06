import React, { useState } from 'react';

const AddPanel = ({addItem}) => {
    const [inputText, setInputText] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        
        if (inputText) {
            addItem(inputText);
            setInputText('');
        }
    }

    return (
        <form 
        className="input-group min-height"
        onSubmit={onSubmit}
        >
            <input 
            onChange={(e) => setInputText(e.target.value)}
            className="form-control" type="text"
            value={inputText}
            />
            <button className="input-group-append btn btn-primary"
            type="submit"
            >Добавить</button>
        </form>
    )
}

export default AddPanel;