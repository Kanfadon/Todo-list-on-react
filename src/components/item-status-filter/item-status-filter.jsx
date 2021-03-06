import React from 'react';

const ItemStatusFilter = ({ onFilterChange }) => {

    return (
        <form className="form-group col-sm-6">
            <div>
                <input
                    placeholder="поиск"
                    className="form-control"
                    type="text"
                    onChange={e => onFilterChange(e.target.value)}
                />
            </div>
        </form>
    )
}

export default ItemStatusFilter;