import dispatcher from '../dispatcher';
import React from 'react';
import EventEmmiter from 'events';
import data from "../components/CategoriesList/data";

class ComponentStore extends EventEmmiter {
    constructor(props) {
        super(props)
        //this.state = data;
        this.state = {
            data: " state",
            category: "category",
            inactive: [""],
            active: [""],
    
        };

        this.stateAdd = {
            data: " stateAdd",
            categoryAdd: "categoryAdd",
            inactiveAdd: [""],
            activeAdd: [""],
        };

    }

    setState = (state) => {
        this.state = {...this.state, ...state}
    }

    setStateAdd = (stateAdd) => {
        this.stateAdd = {...this.stateAdd, ...stateAdd}
    }


    editComponent(data, category, inactive, active) {
        this.setState({
            data: data,
            category: category,
            inactive: inactive,
            active: active,
                     
        });

        this.emit("change");
    }

    editCategory(data, category, inactive, active) {
        this.setState({
            data: data,
            category: category,
            inactive: inactive,
            active: active,

        });

        this.emit("change");
    }

    addCategory(data, categoryAdd, inactiveAdd, activeAdd) {
        this.setState({
            data: data,
            categoryAdd: categoryAdd,
            inactiveAdd: inactiveAdd,
            activeAdd: activeAdd,
        });

        this.emit("change");
    }

    getAll() {
        return this.state;
    }

    getAllAdd() {
        return this.stateAdd;
    }


    handleActions(action) {
        switch(action.type) {
            case "EDIT_COMPONENT": {
                this.editComponent(action.data, action.category, action.inactive, action.active);
                break;
            }
            case "EDIT_CATEGORY": {
                this.editCategory(action.data, action.category, action.inactive, action.active);
                break;
            }
            case "ADD_CATEGORY": {
                this.addCategory(action.data, action.categoryAdd, action.inactiveAdd, action.activeAdd);
                break;
            }
            default: {
                console.log("Choose another option");
            }
        }
    }
}

const componentStore = new ComponentStore();
dispatcher.register(componentStore.handleActions.bind(componentStore));

export default componentStore;