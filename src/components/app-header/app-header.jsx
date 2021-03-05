import React from 'react';

const AppHeader = ({todos, done}) => {
    return (
        <div className="row mt-3">
            <h1 className="col-md-6">Simple Todo</h1>
            <h4 className="col-md-6 d-flex justify-content-md-end align-items-end">всего {todos}, выполнено {done}</h4>
        </div>
    )
}

export default AppHeader;