import React from 'react';
import ItemStatusFilter from './../item-status-filter'

const SearchPanel = ({ onFilterChange, selectCategory }) => {
    return (
        <div className="row mt-1">
            <ItemStatusFilter onFilterChange={onFilterChange} />
            <div className="btn-group col-sm-6">
                <button
                    className="btn btn-primary"
                    onClick={() => selectCategory('all')}
                >Все</button>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => selectCategory('important')}
                >Важно</button>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => selectCategory('complete')}
                >Готово</button>
            </div>

        </div>
    )
}

export default SearchPanel;