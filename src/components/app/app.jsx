import React from 'react';
import AppHeader from './../app-header'
import SearchPanel from './../search-panel'
import TodoList from './../todo-list'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <AppHeader
                    todos="3" 
                    done="0" 
                    />
                    <SearchPanel />
                    <TodoList />
                </div>
            </div>
            
        </div>
    )
}

export default App;