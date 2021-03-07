import React, { Component } from 'react';
import AppHeader from './../app-header';
import SearchPanel from './../search-panel';
import TodoList from './../todo-list';
import AddPanel from './../add-panel';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: 'all',
            startId: 10,
            filter: '',

            itemList: [
                { id: 1, text: 'супер длииииииииииииииииинннноееееее и вааааааажноееееееееее дело', important: true, complete: false },
                { id: 2, text: 'купить хлеб', important: false, complete: true },
                { id: 3, text: 'прочитать книгу', important: false, complete: false },
                { id: 4, text: 'вынести мусор', important: false, complete: false },
                { id: 5, text: 'полгладить кота', important: false, complete: false },
                { id: 6, text: 'постирать вещи', important: false, complete: false }
            ]
        }

        this.onImportant = this.onImportant.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    selectCategory(category) {
        this.setState({ category: category });
    }

    changeCategory(array) {
        switch (this.state.category) {
            case 'all':
                return array;
            case 'important':
                return array.filter(elem => elem.important);
            case 'complete':
                return array.filter(elem => elem.complete);
            default:
                return array;
        }
    }

    onImportant(id) {
        this.setState(({ itemList }) => {
            const index = itemList.findIndex(elem => elem.id === id);
            const newItem = { ...itemList[index], important: !itemList[index].important };

            return {
                itemList: [
                    ...itemList.slice(0, index),
                    newItem,
                    ...itemList.slice(index + 1)]
            };
        });
    }

    onDelete(id) {
        this.setState(({ itemList }) => {
            const index = itemList.findIndex(elem => elem.id === id);
            const before = itemList.slice(0, index);
            const after = itemList.slice(index + 1, itemList.length);

            return { itemList: [...before, ...after] };
        })
    }

    addItem(text) {
        this.setState(({ startId, itemList }) => {
            return {
                startId: ++startId, itemList: [
                    ...itemList,
                    { id: ++startId, text: text, important: false, complite: false }
                ]
            }
        })
    }

    onFilterChange(newFilter) {
        this.setState({ filter: newFilter })
    }

    onFilter(array) {
        if (this.state.filter) {
            const newArray = array.filter(elem => elem.text.toLowerCase().includes(this.state.filter));
            return newArray;
        } else {
            return array;
        }
    }

    onComplete(id) {
        this.setState(({ itemList }) => {
            const index = itemList.findIndex(elem => elem.id === id);
            const newItem = { ...itemList[index], complete: !itemList[index].complete };

            return {
                itemList: [
                    ...itemList.slice(0, index),
                    newItem,
                    ...itemList.slice(index + 1)]
            };
        })
    }

    render() {
        const filteredCategory = this.changeCategory(this.state.itemList)
        const filtered = this.onFilter(filteredCategory);



        const itemCount = filtered.length;
        const completeCount = filtered.filter(elem => elem.complete).length;

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <AppHeader
                            todos={itemCount}
                            done={completeCount}
                        />
                        <SearchPanel
                            currentCategory={this.state.category}
                            onFilterChange={this.onFilterChange}
                            selectCategory={this.selectCategory}
                        />
                        <TodoList
                            onImportant={this.onImportant}
                            onComplete={this.onComplete}
                            itemList={filtered}
                            onDelete={this.onDelete}
                        />
                        <AddPanel addItem={this.addItem} />
                    </div>
                </div>
            </div>
        )
    }
}