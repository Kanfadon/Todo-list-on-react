import React from 'react';
import ItemStatusFilter from './../item-status-filter'

const SearchPanel = ({onFilterChange}) => {
    return (
        <div className="row mt-1">
            <ItemStatusFilter onFilterChange={onFilterChange} />
            <div className="btn-group col-sm-6">
                <button className="btn btn-primary">Все</button>
                <button className="btn btn-outline-secondary">Важно</button>
                <button className="btn btn-outline-secondary">Готово</button>
            </div>
            
        </div>
    )
}

export default SearchPanel;